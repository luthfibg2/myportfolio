import React from 'react'
import { counterItems } from '../constants/index'
import CountUp from 'react-countup'

const AnimatedCounter = () => {
  return (
    <div id="counter" className="w-full xl:mt-0 mt-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {counterItems.map((item, i) => (
          <div key={i} className="bg-zinc-900 rounded-lg p-10 flex flex-col justify-center">
            <div className="counter-number text-red-400 font-bold text-5xl mb-2">
            {typeof item.value === "number" ? (
            <CountUp end={item.value} suffix={item.suffix || ""} />
            ) : (
              `${item.value}${item.suffix || ""}`
            )}
            </div>
            <div className="text-white/70 text-lg">{item.label}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AnimatedCounter