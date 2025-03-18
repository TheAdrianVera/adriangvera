import type { Metadata } from "next"
import "./globals.css"
import AnimateBody from "@components/motion/AnimateBody"

//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const metadata: Metadata = {
  title: "Adrian Vera | Software Engineer",
  description: "Adrian Vera Northbrook based Software Engineer",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        <AnimateBody>{children}</AnimateBody>
      </body>
    </html>
  )
}
