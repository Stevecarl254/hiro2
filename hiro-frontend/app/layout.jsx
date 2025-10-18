import { Geist, Geist_Mono } from "next/font/google"
import "../styles/global.css"

const geistSans = Geist({ subsets: ["latin"] })
const geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata = {
  title: "Hiro Catering - Premium Event & Catering Services",
  description: "One-stop solution for all catering services and event needs",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.className} bg-background text-foreground`}>{children}</body>
    </html>
  )
}

