'use client';

import { Manrope } from 'next/font/google';
import { globalStyles } from '@/styles/global';

const manrope = Manrope({ subsets: ['latin'], display: 'swap', variable: '--font-manrope' });

export const metadata = {
  title: 'Revizx',
  description: 'A description',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  globalStyles();

  return (
    <html lang="en" className={manrope.className}>
      <body>{children}</body>
    </html>
  );
}
