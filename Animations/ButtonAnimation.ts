import { gsap } from "gsap";

export const ButtonAnimation = (className: string) => {
    const button: any = document.querySelector(`${className} #text`);

    button.onmouseenter = function(){

        gsap.to(`${className} .bg-h`, {
            duration: 1,
            xPercent: 100,
            ease: "expo",
            backgroundColor: "rgba(255,255,255,0.1)",
            stagger: 0.2
        });

        gsap.to(className, {
            duration: 1,
            width: 170,
            ease: "elastic"
        });
    }

    button.onmouseleave = function(){

        const tl = gsap.timeline();

        tl.to(`${className} .bg-h`, {
            duration: 1,
            xPercent: 200,
            ease: "expo",
            stagger: 0.2
        }); 

        tl.to(`${className} .bg-h`, {
            duration: 0,
            xPercent: 0,
            backgroundColor: "rgba(255,255,255,0)",
        })

        gsap.to(className, {
            duration: 1,
            width: 160,
            ease: "elastic"
        });
        
    }
}