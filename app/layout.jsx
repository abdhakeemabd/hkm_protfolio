import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://abdulhakeem.dev"),
  title: "Abdul Hakeem | Full Stack & Frontend Developer | React.js, Next.js & Three.js",
  description: "Abdul Hakeem is a Full Stack & Frontend Developer specializing in React.js, Next.js, Three.js, Python/Django, and modern responsive web experiences.",
  keywords: [
    "Abdul Hakeem",
    "Frontend Developer",
    "Full Stack Developer",
    "React.js Developer",
    "Next.js Developer",
    "Three.js 3D Developer",
    "Python Django Developer",
    "STAFF-DO",
    "CSAP ERP",
    "IECI ERP",
    "Web Application Engineer"
  ],
  authors: [{ name: "Abdul Hakeem", url: "https://abdulhakeem.dev" }],
  creator: "Abdul Hakeem",
  publisher: "Abdul Hakeem",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://abdulhakeem.dev",
  },
  openGraph: {
    title: "Abdul Hakeem | Full Stack & Frontend Developer | React.js, Next.js & Three.js",
    description: "Abdul Hakeem is a Full Stack & Frontend Developer specializing in React.js, Next.js, Three.js, Python/Django, and modern responsive web experiences.",
    url: "https://abdulhakeem.dev",
    siteName: "Abdul Hakeem Portfolio",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/profile.jpg",
        width: 1200,
        height: 630,
        alt: "Abdul Hakeem - Full Stack & Frontend Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Abdul Hakeem | Full Stack & Frontend Developer | React.js, Next.js & Three.js",
    description: "Abdul Hakeem is a Full Stack & Frontend Developer specializing in React.js, Next.js, Three.js, Python/Django, and modern responsive web experiences.",
    images: ["/profile.jpg"],
  },
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Abdul Hakeem",
    jobTitle: "Full Stack & Frontend Developer",
    url: "https://abdulhakeem.dev",
    image: "https://abdulhakeem.dev/profile.jpg",
    sameAs: [
      "https://github.com",
      "https://www.linkedin.com/in/abdul-hakeem-b0a05a256"
    ],
    knowsAbout: [
      "React.js",
      "Next.js",
      "Three.js",
      "Python",
      "Django",
      "Django REST Framework",
      "JavaScript",
      "Tailwind CSS",
      "Docker",
      "MySQL"
    ],
  };

  return (
    <html lang="en" className="light scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-[#fafafa] text-slate-900 antialiased selection:bg-indigo-500/20 selection:text-indigo-900">
        {children}
      </body>
    </html>
  );
}
