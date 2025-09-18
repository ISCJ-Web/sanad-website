import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-space-grotesk' })

export const metadata: Metadata = {
  title: 'Sanad Institute - Discover. Learn. Connect.',
  description: 'Sanad Institute is a premier Islamic learning institute dedicated to providing authentic Islamic education and fostering spiritual growth.',
  keywords: 'Islamic education, Arabic learning, Islamic studies, Quran, Hadith, Islamic institute',
  icons: {
    icon: '/images/logo/ISCJ-favicon.png',
    shortcut: '/images/logo/ISCJ-favicon.png',
    apple: '/images/logo/ISCJ-favicon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
