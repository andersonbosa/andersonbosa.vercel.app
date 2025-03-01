import '@/modules/__shared__/theme/common.css'
import './globals.css'

import type { Metadata } from "next"
import { Roboto } from "next/font/google"
import Head from 'next/head'
import { meta } from './constants'

const fontImported = Roboto({ subsets: ['latin'], weight: ['100', '300', '400', '500', '700', '900'] })

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  creator: meta.creator,
}

export default function RootLayout(
  { children, }: Readonly<{ children: React.ReactNode }>
) {
  return (
    <html lang='en'>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <body className={fontImported.className}>
        {children}
      </body>
    </html>
  )
}
