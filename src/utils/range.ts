/**
 * Creates a debounced function that delays invoking the provided function until after `delay` milliseconds
 * have elapsed since the last time the debounced function was invoked.
 *
 * @param {Function} fn - The function to debounce.
 * @param {number} delay - The number of milliseconds to delay.
 * @return {Function} The debounced function.
 */
export const debounce = (fn: Function, delay: number): Function => {
    // The identifier for the timeout function.
    let timeoutId: any;

    /**
     * The debounced function that delays invoking the provided function until after `delay` milliseconds
     * have elapsed since the last time the debounced function was invoked.
     *
     * @param {...any} args - The arguments to pass to the function.
     * @return {void}
     */
    return (...args: any): void => {
        // If there is a timeout in progress, clear it.
        if (timeoutId) {
            clearTimeout(timeoutId);
        }

        // Set a new timeout to invoke the function after `delay` milliseconds.
        timeoutId = setTimeout(() => {
            fn(...args);
        }, delay);
    };
}

/**
 * Calculates the value within a range based on the current value and the start and end values.
 *
 * @param {number} current - The current value.
 * @param {number} total - The total value.
 * @param {number} start - The start value.
 * @param {number} end - The end value.
 * @param {number} [startFrom=0] - The start from value.
 * @return {number} The calculated value within the range.
 */
export const inRangeFromStart = (current: number, total: number, start: number, end: number, startFrom: number = 0): number => {
    // If the current value is less than the start from value, return the start value.
    if (current < startFrom) {
        return start;
    }

    // Calculate the percentage of the current value based on the total value.
    const percentage = (current - startFrom) / total;

    // Calculate the range between the start and end values.
    const range = end - start;

    // Calculate and return the value within the range based on the percentage.
    return start + (percentage * range);
}

/**
 * Calculates the value within a range based on the current value and the start and end values
 * from the end of the range.
 *
 * @param {number} current - The current value.
 * @param {number} total - The total value.
 * @param {number} start - The start value.
 * @param {number} end - The end value.
 * @param {number} [startFrom=0] - The start from value.
 * @return {number} The calculated value within the range from the end.
 */
export const inRangeFromEnd = (current: number, total: number, start: number, end: number, startFrom: number = 0): number => {
    // If the current value is less than the start from value, return the end value.
    if (current < startFrom) {
        return end;
    }

    // Calculate the percentage of the current value based on the total value.
    const percentage = (current - startFrom) / total;

    // Calculate the range between the start and end values.
    const range = end - start;

    // Calculate and return the value within the range from the end based on the percentage.
    return end - (percentage * range);
}

/**
 * Returns the minimum of two numbers.
 *
 * @param {number} a - The first number to compare.
 * @param {number} b - The second number to compare.
 * @return {number} The minimum of the two numbers.
 */
export const min = (a: number, b: number): number => {
    return a < b ? a : b;
}

/**
 * Returns the maximum of two numbers.
 *
 * @param {number} a - The first number to compare.
 * @param {number} b - The second number to compare.
 * @return {number} The maximum of the two numbers.
 */
export const max = (a: number, b: number): number => {
    return a > b ? a : b;
}

/**
 * Adjusts the scrolling speed of an element based on the current scroll position.
 * 
 * @param {number} currentScroll - The current scroll position.
 * @param {number} speedFactor - The factor by which to adjust the scroll speed. 
 *                               Values greater than 1 will speed up the scroll,
 *                               values between 0 and 1 will slow it down.
 * @return {number} - The adjusted scroll value.
 */
export const adjustScrollSpeed = (currentScroll: number, speedFactor: number, startFrom = 0): number => {
    if (currentScroll < startFrom) {
        return currentScroll;
    }
    
    return currentScroll * speedFactor;
}