import '@/modules/__shared__/theme/common.css'
import './globals.css'

import type { Metadata } from "next"
import { Roboto } from "next/font/google"
import Script from 'next/script'
import { meta } from './constants'
import { ProvidersClientSide } from './providers-client-side'
import { ProvidersServerSide } from './providers-server-side'

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
        <ProvidersServerSide>
          <ProvidersClientSide>
            {children}
          </ProvidersClientSide>
        </ProvidersServerSide>
        <Script id='cloudflare' defer src='https://static.cloudflareinsights.com/beacon.min.js' data-cf-beacon='{"token": "fec50b3155ad4217becd9afc2811da6f"}'> </Script>
      </body>
    </html>
  )
}
