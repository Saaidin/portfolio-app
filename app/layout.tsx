import { aboutMeData, pages } from "./data/data"
import "../styles/globals.css"
import Footer from "./components/Footer"
import Header from "./components/Header"
import React from "react"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head />
      <body>
        <Header name={aboutMeData.name} pages={pages} />
        {children}
        <Footer />
      </body>
    </html>
  )
}
