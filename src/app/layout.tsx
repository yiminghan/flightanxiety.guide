import "@/styles/globals.css";
import { Space_Mono } from "next/font/google";

const font = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Flight Anxiety Guide",
  description: "Put your flight anxiety in perspective",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  );
}
