import '@/modules/__shared__/theme/common.css'
import './globals.css'

import { ContextProvider } from '@/modules/__shared__/contexts/context.providers'
import type { Metadata } from "next"
import { Roboto } from "next/font/google"
import Script from 'next/script'
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
      <body className={fontImported.className}>
        <ContextProvider>
          {children}
        </ContextProvider>
        <Script id='cloudflare' defer src='https://static.cloudflareinsights.com/beacon.min.js' data-cf-beacon='{"token": "fec50b3155ad4217becd9afc2811da6f"}'> </Script>
      </body>
    </html>
  )
}
