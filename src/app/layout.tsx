import './globals.css';
import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import 'the-new-css-reset/css/reset.css';

const roboto = Roboto({ weight: ['400', '500'], subsets: ['latin'], display: 'swap' });

export const metadata: Metadata = {
  title: 'TVOЁ',
  description: 'NextJS Landing page',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
