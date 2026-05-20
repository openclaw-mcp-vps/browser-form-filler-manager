import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FormFiller Pro — Smart Browser Form Auto-Fill",
  description: "Browser extension that learns form patterns and auto-fills with appropriate data based on site context. Built for QA engineers and frontend developers."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="bedb9e7f-f9e6-4782-b955-558144ccd7b9"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
