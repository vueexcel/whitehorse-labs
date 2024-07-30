import { onUnmounted, ref } from 'vue';

export function useObserveOffset<T extends HTMLElement>() {
  const offsetTop = ref<number>(0);
  const offsetBottom = ref<number>(0);
  
  let elementRef: T;
  const updateOffsets = () => {
    const rect = elementRef.getBoundingClientRect();
    offsetTop.value = rect.top;
    offsetBottom.value = window.innerHeight - rect.bottom;
  };

  const observe = (element: T) => {
    elementRef = element;

    updateOffsets();
    window.addEventListener('scroll', updateOffsets);
    window.addEventListener('resize', updateOffsets);
  }

  const cleanup = () => {
    window.removeEventListener('scroll', updateOffsets);
    window.removeEventListener('resize', updateOffsets);
  }

  onUnmounted(cleanup);

  return { offsetTop, offsetBottom, observe, cleanup };
}
