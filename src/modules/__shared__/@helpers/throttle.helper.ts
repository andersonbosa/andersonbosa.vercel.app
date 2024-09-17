/**
 * Throttles a function to ensure it is called only once within a specified time limit.
 *
 * @param {function} func - The function to be throttled.
 * @param {number} limit - The time limit in milliseconds.
 * @returns {function} - The throttled function.
 */
export const throttle = (func: (...args: any[]) => void, limit: number): () => void => {
  let lastFunc: NodeJS.Timeout
  let lastRan: number

  /**
 * The throttled function.
 *
 * @param {...any} args - The arguments to be passed to the original function.
 * @returns {void}
 */
  return function (...args: any[]): void {
    const context = this
    if (!lastRan) {
      func.apply(context, args)
      lastRan = Date.now()
    } else {
      clearTimeout(lastFunc)
      lastFunc = setTimeout(function () {
        if (Date.now() - lastRan >= limit) {
          func.apply(context, args)
          lastRan = Date.now()
        }
      }, limit - (Date.now() - lastRan))
    }
  }
}
