import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nuha Ahmed",
  description:
    "Software Engineering Consultant. AWS Certified.",
  openGraph: {
    title: "Nuha Ahmed",
    description: "Software Engineering Consultant",
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
