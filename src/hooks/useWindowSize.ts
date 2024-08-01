import { onMounted, ref } from "vue";

export const useWindowSize = () => {
    const windowSize = ref({
        width: 0,
        height: 0,
    });

    const handleResize = () => {
        windowSize.value = {
            width: window.innerWidth,
            height: window.innerHeight,
        };
    };

    onMounted(() => {
        handleResize();
        window.addEventListener("resize", handleResize);
    })

    onMounted(() => {
        window.addEventListener("resize", handleResize);
    })

    return windowSize;
}