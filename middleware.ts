import createMiddleware from 'next-intl/middleware'
import { i18nConfiguration } from './i18n'

export default createMiddleware({
  // A list of all locales that are supported
  locales: i18nConfiguration.locales,

  // Used when no locale matches
  defaultLocale: i18nConfiguration.defaultLocale,

  localePrefix: undefined
})

export const config = {
  matcher: [
    // Enable a redirect to a matching locale at the root
    '/',

    // Set a cookie to remember the previous locale for
    // all requests that have a locale prefix
    '/(en-us|pt-br|it)/:path*',

    // Enable redirects that add missing locales
    // (e.g. `/pathnames` -> `/en/pathnames`)
    '/((?!_next|_vercel|.*\\..*).*)'
  ]
}
