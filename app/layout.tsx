import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Interview Bias Checker — Detect Unconscious Bias in Coding Interviews",
  description: "AI-powered analysis of interview transcripts and feedback to identify bias patterns. Built for tech recruiters and engineering managers."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="4113d703-b0f0-499f-a1d9-ff38aac7afe6"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
