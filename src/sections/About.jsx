import React from 'react'
import AnimatedCounter from '../components/AnimatedCounter'

const About = () => {
  return (
    <section id="about" className="section-padding w-full md:mb-40 h-full px-5 md:px-20 py-10">
        <div className="flex flex-col md:flex-row gap-10 w-full items-center justify-between">

            {/* LEFT */}
            <div className="w-full rounded-xl flex-col flex md:flex-4/10 items-center justify-start">
                <div className="w-40 h-40 md:w-60 md:h-60 overflow-hidden rounded-full img-wrapper" style={{
                    backgroundImage: 'linear-gradient(to right, #ae9995 10%, white)',
                }}>
                    <img className="w-full" src="/images/me-professional.png" alt="my-photo" />

                </div>
                <p className='text-white-50 text-center md:text-3xl mt-10 relative z-10 pointer-events-none'>Muhamad Luthfi Bangun Permadi</p>
            </div>

            {/* RIGHT */}
            <div className="w-full flex flex-wrap gap-10 md:flex-6/10 rounded-xl">
                <AnimatedCounter />
            </div>
        </div>
    </section>
  )
}

export default About