import { ref, watch, type Ref, type UnwrapRef } from "vue";

export const useDebounce = <T>(state: Ref<UnwrapRef<T>>, delay: number | number[]) => {
    const debouncedValue = ref<T>(state.value as T);
    
    const delayArray: number[] = Array.isArray(delay) ? delay : [delay];
    let timeoutId: ReturnType<typeof setTimeout>;
    let lastTriggerIndex = 0;

    watch(state, (value) => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            debouncedValue.value = value;
            lastTriggerIndex = (lastTriggerIndex + 1) % delayArray.length;
        }, delayArray[lastTriggerIndex]);
    });

    return debouncedValue;
}