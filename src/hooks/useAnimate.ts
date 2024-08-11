import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { onMounted, onUnmounted } from 'vue'

export const useAnimate = (
    callback: ({
        to,
        fromTo
    }: {
        to: (target: gsap.TweenTarget, to: gsap.TweenVars) => void
        fromTo: (target: gsap.TweenTarget, from: gsap.TweenVars, to: gsap.TweenVars) => void
    }) => void
) => {
    const targets: gsap.TweenTarget[] = []

    onMounted(() => {
        callback({
            to: (target: gsap.TweenTarget, to: gsap.TweenVars) => {
                targets.push(target)

                gsap.to(target, {
                    ...to
                })
            },
            fromTo: (target: gsap.TweenTarget, from: gsap.TweenVars, to: gsap.TweenVars) => {
                targets.push(target)

                gsap.fromTo(
                    target,
                    {
                        ...from
                    },
                    {
                        ...to
                    }
                )
            }
        })
        
        /** JUST FOR RECALCULATING ANIMATION POSITIONS */
        /** IN SOME CASE GSAP ANIMATION ARE NOT WORKING WHEN CHANGING ROUTES. */
        ScrollTrigger.refresh();

        setTimeout(() => {
            ScrollTrigger.refresh();
        }, 50)

        setTimeout(() => {
            ScrollTrigger.refresh();
        }, 200)
    })

    onUnmounted(() => {
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
        gsap.killTweensOf(targets)
    })
}
