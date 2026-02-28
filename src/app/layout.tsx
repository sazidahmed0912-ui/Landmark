import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';

const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Juria New Star Restaurant - Best Food in Juria, Nagaon, Assam',
  description: 'Juria New Star Restaurant offers delicious food with fresh ingredients in Juria, Nagaon, Assam. Call 6000133844 for orders and reservations.',
  openGraph: {
    title: 'Juria New Star Restaurant - Best Food in Juria, Nagaon, Assam',
    description: 'Juria New Star Restaurant offers delicious food with fresh ingredients in Juria, Nagaon, Assam. Call 6000133844 for orders and reservations.',
    url: 'https://jurianewstarrestaurant.com',
    siteName: 'Juria New Star Restaurant',
    images: [
      {
        url: 'https://jurianewstarrestaurant.com/og-image.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Juria New Star Restaurant - Best Food in Juria, Nagaon, Assam',
    description: 'Juria New Star Restaurant offers delicious food with fresh ingredients in Juria, Nagaon, Assam. Call 6000133844 for orders and reservations.',
    images: ['https://jurianewstarrestaurant.com/og-image.jpg'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} font-sans antialiased bg-white text-gray-900`}>
        {children}
      </body>
    </html>
  );
}
