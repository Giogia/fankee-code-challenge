import type { Metadata } from 'next'

import { ReactNode } from 'react'

import Footer from './footer'
import './globals.css'

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
         <body>
            {children}
            {Footer}
         </body>
      </html>
   )
}
