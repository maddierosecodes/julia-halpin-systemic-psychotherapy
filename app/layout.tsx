import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/organisms/Header";
import { Footer } from "@/components/organisms/Footer";

export const metadata: Metadata = {
  title: {
    default: "Systemic Psychotherapy in Chorley | Julia Halpin",
    template: "%s | Systemic Psychotherapy in Chorley | Julia Halpin",
  },
  description:
    "Julia Halpin is a qualified hypnotherapist based in Chorley, offering compassionate, effective Systemic Psychotherapy services for anxiety, stress, weight loss, and more.",
  keywords: [
    "Systemic Psychotherapy Chorley",
    "Julia Halpin",
    "Chorley hypnotherapist",
    "anxiety Systemic Psychotherapy",
    "smoking cessation Chorley",
    "stress management",
    "hypnosis therapy Chorley",
    "wellbeing",
    "mental health support",
  ],
  authors: [{ name: "Julia Halpin" }],
  creator: "Julia Halpin",
  publisher: "Julia Halpin Systemic Psychotherapy",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://www.lhSystemicPsychotherapy.co.uk/"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Systemic Psychotherapy in Chorley | Julia Halpin",
    description:
      "Looking for Systemic Psychotherapy in Chorley? Julia Halpin offers personalised sessions to help with anxiety, weight loss, smoking cessation and more.",
    url: "https://www.lhSystemic Psychotherapy.co.uk/",
    siteName: "Julia Halpin Systemic Psychotherapy",
    locale: "en_GB",
    type: "website",
  },
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
  verification: {
    google: "google-site-verification-code", // Replace with your real code
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <Header />
        <main
          className="flex-grow bg-lavender-100 pt-28 sm:pt-24 lg:pt-20 lg:px-15"
          id="main-content"
          tabIndex={-1}
        >
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
