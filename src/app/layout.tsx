import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ashvkatha - Rescue, Rehabilitation, and Conservation",
  description: "Established by Reliance Foundation, Ashvkatha is the world's largest rescue, treatment, and rehabilitation center located in Jamnagar, Gujarat.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
