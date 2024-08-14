import { defineStore } from "pinia";
import { nextTick } from "vue";

export const usePageLoader = defineStore("pageLoader", {
    state: () => ({
        loading: true,
    }),
    actions: {
        startLoading() {
            this.loading = true;
        },
        stopLoading() {
            this.loading = false;
        },
        beforeRouteChange() {
            this.startLoading();
        },
        afterRouteChange() {
            const images = document.getElementsByTagName('img');
            nextTick(() => {
                const totalImagesToBeLoaded = images.length;
                let loadedImages = 0;
                const onLoadListener = () => {
                    loadedImages++;
                    if (loadedImages === totalImagesToBeLoaded) {
                        this.stopLoading();
                    }
                }

                for (let i = 0; i < totalImagesToBeLoaded; i++) {
                    if (images[i].complete) {
                        onLoadListener();
                    } else {
                        images[i].onload = onLoadListener;
                    }
                }
            });
        }
    }
});
