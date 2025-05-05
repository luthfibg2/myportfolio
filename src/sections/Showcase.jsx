import React, { useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react'
import TitleHeader from '../components/TitleHeader'

gsap.registerPlugin(ScrollTrigger);

const Showcase = () => {
    const sectionRef = useRef(null);
    const project1Ref = useRef(null);
    const project2Ref = useRef(null);
    const project3Ref = useRef(null);

    
    
    useGSAP(() => {
        const projects = [project1Ref.current, project2Ref.current, project3Ref.current];

        projects.forEach((card, index) => {
            gsap.fromTo(
                card,
                {
                    y: 50, opacity: 0
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    delay: 0.3 * (index + 1),
                    scrollTrigger: {
                        trigger: card,
                        start: "top bottom-=100"
                    }
                }
            )
        });

        gsap.fromTo(
            sectionRef.current,
            { opacity: 0 },
            {
                opacity: 1,
                duration: 1.5
            }
        )
    }, []);
  return (
    <section id="work"
    ref={sectionRef} className="app-showcase-wrapper flex flex-col justify-center w-full">
        <TitleHeader title="Projek Saya" sub="My Projects" />
        <section className="app-showcase">
            <div className="w-full">
                <div className="showcaselayout">
                    {/* LEFT */}
                    <div className="first-project-wrapper" ref={project1Ref}>
                        <div className="image-wrapper">
                            <img src="/images/crm.png" alt="CRMas" />
                        </div>
                        <div className="text-content">
                            <h2>Aplikasi CRM berbasis web, dengan terobosan algoritma XGBoost.</h2>

                            <p className="text-white-50 md:text-xl">
                                Aplikasi berbasis web yang dikembangkan dengan ReactJS, MaterialUI, dan ExpressJS.
                            </p>
                        </div>
                    </div>
                    {/* RIGHT */}
                    <div className="project-list-wrapper overflow-hidden">
                        <div className="project"  ref={project2Ref}>
                            <div className="image-wrapper bg-[#ffefdb]">
                                <img src="/images/tanyajawab.png" alt="Educational App" />
                            </div>
                            <h2>Tanyajawab - Aplikasi pendidikan berbasis AI</h2>
                        </div>
                        <div className="project"  ref={project3Ref}>
                            <div className="image-wrapper bg-[#ffe7eb]">
                                <img src="/images/cloudtv.jpg" alt="CloudTV" />
                            </div>
                            <h2>CloudTV - Sistem periklanan digital</h2>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </section>
  )
}

export default Showcase