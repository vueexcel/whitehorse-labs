
import { onMounted, onUnmounted } from "vue";

export const useListener = <T extends keyof HTMLElementEventMap>(
    element: HTMLElement,
    event: T,
    callback: (this: HTMLElement, ev: HTMLElementEventMap[T]) => any
) => {
    onMounted(() => {
        element.addEventListener(event, callback);
    });

    onUnmounted(() => {
        element.removeEventListener(event, callback);
    });
}