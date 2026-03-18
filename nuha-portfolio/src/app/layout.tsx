import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nuha Ahmed — Product & Engineering",
  description:
    "Product-minded Software Engineering Consultant. AWS Certified. Based in Detroit.",
  openGraph: {
    title: "Nuha Ahmed",
    description: "Product-minded Software Engineering Consultant",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
