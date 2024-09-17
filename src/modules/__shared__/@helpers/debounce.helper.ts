/**
 * Debounces a function, ensuring it is only called after a specified delay since the last time it was invoked.
 *
 * @param {function} func - The function to be debounced.
 * @param {number} delay - The delay in milliseconds.
 * @returns {function} - The debounced function.
 */
export const debounce = (func: (...args: any[]) => void, delay: number): () => void => {
  let timeout: NodeJS.Timeout

  /**
   * The debounced function.
   *
   * @param {...any} args - The arguments to be passed to the original function.
   * @returns {void}
   */
  return function (...args: any[]): void {
    const context = this
    clearTimeout(timeout)
    timeout = setTimeout(() => func.apply(context, args), delay)
  }
}
