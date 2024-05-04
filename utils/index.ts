import { GithubRepo } from '@/lib/types/global'


export const titleCase = (str: string): string => {
  return str
    .toLowerCase()
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}

export function updateUrlLocale (url: string, newLocale: string): string {
  const localeRegex = /^\/([a-z]{2}-[a-z]{2})\//
  const match = url.match(localeRegex)

  if (match && match[1]) {
    const currentLocale = match[1]
    const updatedUrl = url.replace(currentLocale, newLocale)
    return updatedUrl
  }

  return url
}

// export const throttle = (func: Function, limit: number = 500) => {
//   let inThrottle: boolean
//   return function () {
//     const args = arguments
//     const context: any = this
//     if (!inThrottle) {
//       func.apply(context, args)
//       inThrottle = true
//       setTimeout(
//         () => { inThrottle = false },
//         limit
//       )
//     }
//   }
// }

// export function debounce(func: Function, wait: number = 500, immediate: boolean = false) {
//   let timeout: NodeJS.Timeout | string | number | undefined
//   return function (/* this: any */) {
//     const context = this
//     const args: any = arguments
//     const later = function () {
//       timeout = undefined
//       if (!immediate) {
//         return func.apply(context, args)
//       }
//     }
//     const callNow = immediate && !timeout
//     clearTimeout(timeout)
//     timeout = setTimeout(later, wait)
//     if (callNow) {
//       return func.apply(context, args)
//     }
//   }
// }

export const mapToGithubRepo = (apiItem: any): GithubRepo => ({
  name: apiItem.name,
  description: apiItem.description,
  topics: apiItem.topics,
  stargazers_count: apiItem.stargazers_count,
  homepage: apiItem.homepage,
  language: apiItem.language,
  html_url: apiItem.html_url
})
