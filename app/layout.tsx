import type { Metadata } from 'next'

import { Roboto_Condensed } from 'next/font/google'
import { ReactNode } from 'react'
import './globals.css'

const font = Roboto_Condensed({ 
   subsets: ['latin'], 
   preload: true,
   fallback: ['roboto', 'inter']
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
