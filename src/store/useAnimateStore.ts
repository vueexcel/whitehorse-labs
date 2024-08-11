import gsap from 'gsap'
import Lenis from 'lenis'
import { defineStore } from 'pinia'
import ScrollTrigger from 'gsap/ScrollTrigger'

export const useAnimateStore = defineStore('animate', () => {
    const lenis = new Lenis({
        lerp: 0.04,
        easing: (t) => Math.min(1, 1.001 - Math.pow(4, -10 * t)),
        touchMultiplier: 2,
        infinite: false
    })

    function raf(time: number) {
        lenis.raf(time)
        requestAnimationFrame(raf)
    }

    lenis.on('scroll', ScrollTrigger.update)
    gsap.registerPlugin(ScrollTrigger)
    requestAnimationFrame(raf)

    const scrollToTop = () => {
        lenis.stop()
        lenis.scrollTo(0, { duration: 0 }) // scroll without animation
        lenis.start()
    }

    window.addEventListener('resize', () => {
        ScrollTrigger.refresh()
    })
    
    return {
        lenis,
        scrollToTop
    }
})