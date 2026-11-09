import type { Metadata } from 'next';
import type { ReactNode } from 'react';

import 'src/styles/globals.css';

export const metadata: Metadata = {
  title: 'Scout',
  description: "A benchmark of Rango's token coverage and routing.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
