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
    })

    onUnmounted(() => {
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
        gsap.killTweensOf(targets)
    })
}
