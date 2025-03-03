import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
    title: "Cristian Inojosa",
    description: "A personal website for a software developer",
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en" className="scroll-smooth">
            <head>
                <link rel="icon" href='assets/images/image.png' />
            </head>
            <body className={inter.className}>{children}</body>
        </html>
    )
}

