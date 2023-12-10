import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'IMDb Clone',
  description: 'Clone aplication IMDb, the movies votes',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pl">
      <body className={inter.className}>
      <h1 className="text-[#333444]">Menu</h1>
      {children}
      </body>
    </html>
  )
}
