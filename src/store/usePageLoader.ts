import { defineStore } from "pinia";
import { nextTick } from "vue";

export const usePageLoader = defineStore("pageLoader", {
    state: () => ({
        loading: true,
        imageLoaded: false,
        needToWait: false
    }),
    actions: {
        startLoading() {
            this.imageLoaded = false;
            this.loading = true;
            this.needToWait = false;
        },
        stopLoading() {
            if (!this.imageLoaded) {
                this.needToWait = true;
            } else {
                this.loading = false;
            }
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
                        this.imageLoaded = true;
                        if (this.needToWait) {
                            this.needToWait = false;
                            this.loading = false;
                        }
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
