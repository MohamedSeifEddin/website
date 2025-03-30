import "./globals.css";
import { ReactNode } from "react";

export const metadata = {
  title: "Kyno",
  description: "My personal portfolio website",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Delius+Swash+Caps&family=Reddit+Sans:ital,wght@0,200..900;1,200..900&display=swap"
          rel="stylesheet"
        ></link>
      </head>
      <body className="bg-gray-100 text-gray-900">{children}</body>
    </html>
  );
}
