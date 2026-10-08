import { useLayoutEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import "../styles/hero.css"

gsap.registerPlugin(ScrollTrigger)

function Hero() {
    const flowerRef = useRef<HTMLImageElement>(null)
    const wateringCanRef = useRef<HTMLImageElement>(null)
    const waterRef = useRef<HTMLDivElement>(null)

    useLayoutEffect(() => {
        gsap.to(wateringCanRef.current, {
            x: 300,
            y: 15,
            rotation: 35,
            scrollTrigger: {
                trigger: ".hero",
                start: "top top",
                end: "25% top",
                scrub: true,
            },
        })

        gsap.to(waterRef.current, {
            opacity: 1,
            scrollTrigger: {
                trigger: ".hero",
                start: "26% top",
                end: "40% top",
                scrub: true,
            },
        })

        gsap.to(flowerRef.current, {
            scale: 1,
            scrollTrigger: {
                trigger: ".hero",
                start: "30% top",
                end: "85% top",
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