import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Eduardo - FrontEnd Engineer',
  description: '16 years old FrontEnd Engineer with 5 years of experience in modern web development',
  keywords: ['Eduardo', 'Frontend', 'React', 'Next.js', 'TypeScript', 'Web Developer'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
