import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "My Portfolio",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <nav>
          <Link href="/">Home</Link>
          <Link href="/works">Works</Link>
          <Link href="/connect">Connect</Link>
        </nav>
        <main>{children}</main>
      </body>
    </html>
  );
}
