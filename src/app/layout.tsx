import './globals.css'
import '@/modules/__shared__/theme/common.css'

import type { Metadata } from "next"
import Head from 'next/head'
import { Roboto } from "next/font/google"

const fontImported = Roboto({ subsets: ['latin'], weight: ['100', '300', '400', '500', '700', '900'] })

export const metadata: Metadata = {
  title: 'Anderson Bosa',
  description: 'I build secure digital experiences! Passionate about technology and hacking, software engineer since 2019',
  creator: 'Anderson Bosa < https://github.com/andersonbosa >'
}

export default function RootLayout (
  { children, }: Readonly<{ children: React.ReactNode }>
) {
  return (
    <html lang="en_US">
      <body className={fontImported.className}>
        {children}
      </body>
    </html>
  )
}
