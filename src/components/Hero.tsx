import { useLayoutEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import "../styles/hero.css"

gsap.registerPlugin(ScrollTrigger)

function Hero() {
    const flowerRef = useRef<HTMLImageElement>(null)
    const wateringCanRef = useRef<HTMLImageElement>(null)
    const waterDropRefs = useRef<(HTMLImageElement | null)[]>([])
    const waterRef = useRef<HTMLDivElement>(null)

    useLayoutEffect(() => {
        gsap.to(wateringCanRef.current, {
            left: "40%",
            xPercent: -50,
            yPercent: -10,
            rotation: 45,
            scrollTrigger: {
                trigger: ".hero",
                start: "top top",
                end: "15% top",
                scrub: true,
            },
        })

        gsap.to(waterRef.current, {
            opacity: 1,
            scrollTrigger: {
                trigger: ".hero",
                start: "34% top",
                end: "58% top",
                scrub: true,
            },
        })

        const dropAnimations = [
            { start: "27% top", end: "45% top" },
            { start: "36% top", end: "54% top" },
            { start: "58% top", end: "76% top" },
            { start: "67% top", end: "85% top" },
        ]

        waterDropRefs.current.forEach((drop, index) => {
            if (!drop) return

            const animation = dropAnimations[index]
            gsap.to(drop, {
                y: "52vh",
                opacity: 1,
                scrollTrigger: {
                    trigger: ".hero",
                    start: animation.start,
                    end: animation.end,
                    scrub: true,
                },
            })
        })

        gsap.to(flowerRef.current, {
            scale: 1,
            scrollTrigger: {
                trigger: ".hero",
                start: "28% top",
                end: "60% top",
                scrub: true,
            },
        })
    }, [])

    return (
        <section className="hero">
            <div className="hero-content">

                <img
                    ref={wateringCanRef}
                    className="watering-can"
                    src="/hero-assets/watering-can.png"
                    alt="Watering Can"
                />

                <div ref={waterRef} className="water">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

                {[0, 1, 2, 3].map((dropIndex) => (
                    <img
                        key={dropIndex}
                        ref={(element) => {
                            waterDropRefs.current[dropIndex] = element
                        }}
                        className="water-drop"
                        src="/hero-assets/water-drop.png"
                        alt=""
                        aria-hidden="true"
                    />
                ))}

                <img
                    ref={flowerRef}
                    className="main-flower"
                    src="/hero-assets/main-flower.png"
                    alt="Main Flower"
                />
                
            </div>
        </section>
    )
}

export default Hero