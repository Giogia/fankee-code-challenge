import type { Metadata } from 'next'

import { Roboto } from 'next/font/google'
import { ReactNode } from 'react'
import './globals.css'

const font = Roboto({
   subsets: ['latin'],
   preload: true,
   fallback: ['inter'],
   weight: '500'
})

export const metadata: Metadata = {
   title: 'Fankee Code Challenge',
   description: 'Magic Link Authentication and Augmented Profile demo web app',
}

export default function RootLayout({
   children,
}: Readonly<{
  children: ReactNode
}>) {
   return (
      <html lang="en">
         <body className={font.className}>{children}</body>
      </html>
   )
}
