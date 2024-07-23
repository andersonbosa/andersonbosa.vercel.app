export function isMobile () {
  return typeof window !== 'undefined'
    && window.innerWidth <= 768
    && window.matchMedia('(max-width: 768px)').matches
}