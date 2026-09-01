"use client";

import { useRef, useMemo, useState, useEffect, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, OrbitControls, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

// Floating Dual Mesh Object: Wireframe Shell + Inner Glowing Core
function Floating3DGeometry({ isMobile, isReducedMotion }) {
  const groupRef = useRef();
  const innerMeshRef = useRef();
  const wireframeShellRef = useRef();

  useFrame((state, delta) => {
    if (!isReducedMotion) {
      // Smooth continuous 3D rotation
      if (groupRef.current) {
        groupRef.current.rotation.y += delta * 0.22;
        groupRef.current.rotation.x += delta * 0.12;
      }
      if (innerMeshRef.current) {
        innerMeshRef.current.rotation.y -= delta * 0.35;
      }
      if (wireframeShellRef.current) {
        wireframeShellRef.current.rotation.z += delta * 0.1;
      }

      // Smooth mouse lerp tilt parallax
      const mouseX = (state.pointer.x * Math.PI) / 12;
      const mouseY = (state.pointer.y * Math.PI) / 12;
      state.camera.position.x = THREE.MathUtils.lerp(state.camera.position.x, mouseX, 0.05);
      state.camera.position.y = THREE.MathUtils.lerp(state.camera.position.y, mouseY, 0.05);
      state.camera.lookAt(0, 0, 0);
    }
  });

  return (
    <group ref={groupRef}>
      {/* Outer Wireframe Icosahedron */}
      <mesh ref={wireframeShellRef} scale={isMobile ? 1.4 : 1.85}>
        <icosahedronGeometry args={[1, 1]} />
        <meshBasicMaterial
          color="#6366f1"
          wireframe
          transparent
          opacity={0.35}
        />
      </mesh>

      {/* Inner Glowing Core */}
      <mesh ref={innerMeshRef} scale={isMobile ? 0.9 : 1.15}>
        <octahedronGeometry args={[1, 0]} />
        <MeshDistortMaterial
          color="#4f46e5"
          emissive="#10b981"
          emissiveIntensity={0.5}
          roughness={0.2}
          metalness={0.8}
          distort={isMobile ? 0.12 : 0.22}
          speed={isReducedMotion ? 0 : 1.4}
        />
      </mesh>

      {/* Small Glowing Vertex Nodes */}
      {[
        [1.65, 0, 0],
        [-1.65, 0, 0],
        [0, 1.65, 0],
        [0, -1.65, 0],
        [0, 0, 1.65],
        [0, 0, -1.65],
      ].map((pos, idx) => (
        <mesh key={idx} position={pos} scale={0.06}>
          <sphereGeometry args={[1, 16, 16]} />
          <meshBasicMaterial color="#10b981" />
        </mesh>
      ))}
    </group>
  );
}

// Orbiting Particle Field Constellation
function ParticlesField({ count = 85 }) {
  const pointsRef = useRef();

  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    const indigo = new THREE.Color("#6366f1");
    const emerald = new THREE.Color("#10b981");

    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 10;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 10;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 10;

      const mixed = Math.random() > 0.5 ? indigo : emerald;
      col[i * 3] = mixed.r;
      col[i * 3 + 1] = mixed.g;
      col[i * 3 + 2] = mixed.b;
    }
    return [pos, col];
  }, [count]);

  useFrame((state, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += delta * 0.03;
      pointsRef.current.rotation.x += delta * 0.015;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.055}
        vertexColors
        transparent
        opacity={0.65}
        sizeAttenuation
      />
    </points>
  );
}

// Fallback View if WebGL is disabled
export function Fallback3DView() {
  return (
    <div className="relative w-full h-full min-h-[350px] sm:min-h-[420px] rounded-3xl overflow-hidden bg-white border border-slate-200 shadow-xl flex flex-col items-center justify-center p-8">
      <div className="relative w-48 h-48 sm:w-64 sm:h-64 flex items-center justify-center">
        <div className="absolute inset-0 rounded-full border border-indigo-200 animate-[spin_14s_linear_infinite]" />
        <div className="absolute inset-4 rounded-full border border-emerald-200 border-dashed animate-[spin_20s_linear_infinite_reverse]" />
        <div className="absolute inset-10 rounded-full border border-indigo-100 animate-[ping_4s_cubic-bezier(0,_0,_0.2,_1)_infinite]" />
        
        <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-gradient-to-tr from-indigo-600 to-emerald-500 opacity-80 blur-sm animate-pulse" />
        <div className="absolute w-16 h-16 sm:w-20 sm:h-20 rounded-xl bg-gradient-to-tr from-indigo-500 to-emerald-500 flex items-center justify-center shadow-lg shadow-indigo-500/20">
          <div className="w-8 h-8 rounded-full bg-white/30 backdrop-blur-md border border-white/50" />
        </div>
      </div>
      <div className="mt-6 text-center">
        <p className="text-xs font-mono text-indigo-600 tracking-wider uppercase mb-1">Interactive 3D Engine</p>
        <p className="text-xs text-slate-500">React Three Fiber • Three.js Graphics</p>
      </div>
    </div>
  );
}

export default function ThreeScene() {
  const [isMobile, setIsMobile] = useState(false);
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  const [hasWebGL, setHasWebGL] = useState(true);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setIsReducedMotion(mediaQuery.matches);

    try {
      const canvas = document.createElement("canvas");
      const gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
      if (!gl) setHasWebGL(false);
    } catch (e) {
      setHasWebGL(false);
    }

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  if (!hasWebGL) {
    return <Fallback3DView />;
  }

  return (
    <div className="w-full h-full min-h-[350px] sm:min-h-[450px] md:min-h-[500px] relative rounded-3xl overflow-hidden bg-white border border-slate-200 shadow-xl group">
      <div className="absolute inset-0 bg-radial from-indigo-500/5 via-transparent to-transparent pointer-events-none" />

      <Canvas
        camera={{ position: [0, 0, 5], fov: 50 }}
        dpr={isMobile ? [1, 1.5] : [1, 2]}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        className="w-full h-full cursor-grab active:cursor-grabbing"
      >
        <ambientLight intensity={1.1} />
        <directionalLight position={[5, 5, 5]} intensity={1.4} color="#ffffff" />
        <pointLight position={[-5, -5, -5]} intensity={0.6} color="#6366f1" />
        <pointLight position={[5, -5, 5]} intensity={0.5} color="#10b981" />
        
        <Suspense fallback={null}>
          <Float speed={isReducedMotion ? 0 : 1.8} rotationIntensity={0.4} floatIntensity={0.7}>
            <Floating3DGeometry isMobile={isMobile} isReducedMotion={isReducedMotion} />
          </Float>
          <ParticlesField count={isMobile ? 35 : 85} />
        </Suspense>

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          rotateSpeed={0.5}
          maxPolarAngle={Math.PI / 1.5}
          minPolarAngle={Math.PI / 3}
        />
      </Canvas>

      <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between pointer-events-none text-[11px] font-mono text-slate-500">
        <span className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 animate-ping" />
          Interactive 3D Engine
        </span>
        <span>Drag to rotate 3D view</span>
      </div>
    </div>
  );
}
