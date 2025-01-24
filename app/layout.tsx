import './globals.css';
import { ReactNode } from 'react';

export const metadata = {
  title: 'Kyno Portfolio',
  description: 'A personal portfolio site',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-900">{children}</body>
    </html>
  );
}
