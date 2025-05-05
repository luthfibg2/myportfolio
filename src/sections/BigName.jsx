import { React, useEffect } from 'react'
import gsap from 'gsap'

const BigName = () => {
    useEffect(() => {
        gsap.fromTo('.myName', { scale: 0 }, { scale: 1, duration: 2, ease: 'power4.out' });
      }, []);
      
  return (
    <section className="bg-black pt-20 md:pt-0 flex flex-col items-center justify-center w-full h-[120vh] md:h-screen md:px-10">
    <div className="flex items-center justify-center w-full">
      <span className="text-red-400 text-[10vw] md:text-[5rem] scale-x-[2] md:scale-x-[3.5] leading-none tracking-tighter">
        Muhamad
      </span>
    </div>
    <div className="flex myName flex-col md:flex-row items-center md:items-end leading-none -ml-10">
      <span className="text-red-400 text-[19rem] md:text-[30rem] font-extrabold tracking-tighter leading-[0.7]">
        Lu
      </span>
      <span className="text-red-400 text-[19rem] md:text-[30rem] font-extrabold tracking-tighter leading-[0.7]">
        th
      </span>
      <span className="text-red-400 text-[19rem] md:text-[30rem] font-extrabold tracking-tighter leading-[0.7]">
        fi
      </span>
    </div>
    <div className="flex items-center justify-between w-full overflow-hidden">
      <div className="flex-1 overflow-hidden">
        <span className="block text-red-400 text-[10vw] md:text-[5rem] scale-x-[1.8] md:scale-x-[3.5] origin-left leading-none tracking-tighter">
          Bangun
        </span>
      </div>
      <div className="flex-shrink-0">
        <span className="block text-red-400 text-[10vw] md:text-[5rem] leading-none tracking-tighter">
          Permadi
        </span>
      </div>
    </div>

    </section>


  )
}

export default BigName