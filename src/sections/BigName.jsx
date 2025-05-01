import { React, useEffect } from 'react'
import gsap from 'gsap'

const BigName = () => {
    useEffect(() => {
        gsap.fromTo('.myName', { scale: 0 }, { scale: 1, duration: 2, ease: 'power4.out' });
      }, []);
      
  return (
    <section className="bg-black pt-20 md:pt-0 flex items-center justify-center w-full h-screen md:px-10">
    <div className="flex myName flex-col md:flex-row items-center md:items-end leading-none -ml-10">
        <span className="text-red-400 py-0 my-0 text-[19rem] md:text-[22rem] font-extrabold tracking-tighter">
        ML
        </span>
        <span className="text-red-400 py-0 my-0 text-[19rem] md:text-[22rem] font-extrabold tracking-tighter">
        ut
        </span>
        <span className="text-red-400 py-0 my-0 text-[19rem] md:text-[22rem] font-extrabold tracking-tighter">
        hfi
        </span>
    </div>
    </section>


  )
}

export default BigName