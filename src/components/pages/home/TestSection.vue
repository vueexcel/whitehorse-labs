<template>
    <div class="bg-black">
        <section class="flex items-end w-full h-screen bg-center bg-no-repeat bg-cover"
            :style="'background-image: url(' + BackgroundImage + ')'">
            <div class="w-full mx-auto max-w-[1350px] px-4 mb-8">
                <h2 class="mb-32 text-6xl text-white">
                    <span class="inline-block mb-2">Elevating confidence</span><br />
                    <span class="italic text-7xl" style="font-family: Tiempos Headline">to drive your vision</span>
                </h2>

                <div class="flex items-center flex-col md:flex-row md:justify-between w-full text-[12px] uppercase">
                    <RedTitle title="global guardians of technological integrity" text-class="text-white"
                        class="mb-5 ml-0 w-max" />
                    <p
                        class="flex items-center text-xs text-white cursor-pointer w-max hover:opacity-75 font-roboto-mono">
                        scroll to explores
                        <ArrowIcon class-name="ml-1 size-4 ml-2" type="down" path-class="stroke-white" />
                    </p>
                </div>
            </div>
        </section>

        <section ref="imageSection" class="relative flex items-center justify-center w-full h-screen bg-black">
            <div class="absolute top-0 left-0 w-full h-full">
                <div class="relative z-10 flex w-full h-full select-none">
                    <img :src="Image1" alt="images" class="absolute top-0 left-0 pointer-events-none left" />
                    <img :src="Image2" alt="images" class="absolute top-0 right-0 pointer-events-none right" />
                    <img :src="Image3" alt="images"
                        class="absolute pointer-events-none top-[50%] h-52 left-0 translate-y-[-20%] left" />
                    <img :src="Image5" alt="images"
                        class="absolute pointer-events-none h-52 right-0 top-[50%] translate-y-[-20%] right" />
                    <img :src="Image6" alt="images" class="absolute bottom-0 pointer-events-none left-[20%] left" />
                    <img :src="Image7" alt="images" class="absolute bottom-0 pointer-events-none right-[20%] right" />
                </div>
            </div>
            <p class="text-white text-center max-w-[470px] text-3xl z-20 px-6 sm:px-12">
                We safeguard supply chains with specialized testing, inspection, and logistics solutions,
                strategically integrated to ensure product integrity and reduce risk.
            </p>
        </section>
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import BackgroundImage from '@/assets/images/home/landingImage.png'
import Image1 from '@/assets/images/home/Image-1.png'
import Image2 from '@/assets/images/home/Image-2.png'
import Image3 from '@/assets/images/home/Image-3.png'
import Image5 from '@/assets/images/home/Image-5.png'
import Image6 from '@/assets/images/home/Image-6.png'
import Image7 from '@/assets/images/home/Image-7.png'

const imageSection = ref(null)

const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop
    const sectionTop = imageSection.value.offsetTop
    const sectionHeight = imageSection.value.offsetHeight
    const minHeight = 200
    const minWidth = 300

    const background = document.querySelector('[style*="background-image"]')
    const images = document.querySelectorAll('img')

    if (scrollTop < sectionTop) {
        // Calculate the scale based on the scroll position, ensure it doesn't shrink too much
        const scale = Math.max(
            minHeight / window.innerHeight,
            minWidth / window.innerWidth,
            1 - scrollTop / sectionTop
        )
        background.style.transform = `translateY(${scrollTop}px) scale(${scale})`

        // Calculate the translation for the images
        const translateX = Math.min(100, (scrollTop / sectionTop) * 200)
        images.forEach((img) => {
            if (img.classList.contains('left')) {
                img.style.transform = `translateX(${translateX}%)`
            } else if (img.classList.contains('right')) {
                img.style.transform = `translateX(-${translateX}%)`
            }
        })
    } else {
        background.style.transform = `translateY(${sectionTop}px) scale(${minHeight / window.innerHeight}, ${minWidth / window.innerWidth})`
        images.forEach((img) => {
            img.style.transform = `translateX(0)`
        })
    }
}

const setupObserver = () => {
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    window.addEventListener('scroll', handleScroll)
                } else {
                    window.removeEventListener('scroll', handleScroll)
                }
            })
        },
        {
            threshold: 0.1
        }
    )

    observer.observe(imageSection.value)
}

onMounted(() => {
    setupObserver()
})

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
img.left {
    transition: transform 0.3s ease;
    transform: translateX(-100%);
}

img.right {
    transition: transform 0.3s ease;
    transform: translateX(100%);
}

img {
    transition: transform 0.3s ease;
}

section {
    transition: transform 0.3s ease;
}
</style>