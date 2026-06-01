import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/organisms/Header';
import { Footer } from '@/components/organisms/Footer';

export const metadata: Metadata = {
  title: {
    default:
      'Systemic Psychotherapy in Chorley | Family and Couple Therapy Services',
    template:
      '%s | Systemic Psychotherapy in Chorley | Family and Couple Therapy Services'
  },
  description:
    'Julia Halpin is a Systemic Psychotherapist based in Chorley, offering compassionate, evidence-based therapy for couples, and families. Online and in-person sessions available.',
  keywords: [
    'Systemic Psychotherapy Chorley',
    'family therapy',
    'couple therapy',
    'Julia Halpin',
    'mental health support Lancashire',
    'relationship counselling',
    'therapy for anxiety',
    'neurodiversity support',
    'Chorley psychotherapy'
  ],
  authors: [{ name: 'Julia Halpin' }],
  creator: 'Julia Halpin',
  publisher: 'Family and Couple Therapy Services',
  formatDetection: {
    email: false,
    address: false,
    telephone: false
  },
  metadataBase: new URL('https://www.familyandcoupletherapyservices.co.uk'),
  alternates: {
    canonical: 'https://www.familyandcoupletherapyservices.co.uk/'
  },
  openGraph: {
    title:
      'Systemic Psychotherapy in Chorley | Family and Couple Therapy Services',
    description:
      'Looking for family or couple therapy in Chorley? Julia Halpin offers evidence-based Systemic Psychotherapy both in-person and online.',
    url: 'https://www.familyandcoupletherapyservices.co.uk/',
    siteName: 'Family and Couple Therapy Services',
    locale: 'en_GB',
    type: 'website',
    images: [
      {
        url: 'https://www.familyandcoupletherapyservices.co.uk/images/julia_halpin.jpg',
        width: 1200,
        height: 630,
        alt: 'Julia Halpin, Systemic Psychotherapist in Chorley'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title:
      'Systemic Psychotherapy in Chorley | Family and Couple Therapy Services',
    description:
      'Professional therapy services for couples and families in Chorley. Run by Julia Halpin, a qualified Systemic Psychotherapist with NHS experience.',
    images: [
      'https://www.familyandcoupletherapyservices.co.uk/images/julia_halpin.jpg'
    ]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen w-full">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:z-[100] focus:p-3 focus:bg-lavender-200 focus:text-indigo-900 focus:outline-none focus:ring-2 focus:ring-lavender-500">
          Skip to main content
        </a>
        <Header />
        <main
          className="flex-grow bg-lavender-100 pt-24 sm:pt-28 lg:pt-20 w-full overflow-x-hidden px-0 sm:px-4 md:px-6 lg:px-15"
          id="main-content"
          tabIndex={-1}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
