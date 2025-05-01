import React from 'react'
import * as THREE from 'three'

const HeroLights = () => {
  return (
    <>
        <spotLight
            position={[2, 5, 6]}
            angle={0.15}
            intensity={200}
            penumbra={0.2}
            color={"#9d4edd"}
        />
        <spotLight
            position={[-12, 5, 4]}
            angle={0.3}
            intensity={800}
            penumbra={0.2}
            color={"#cc0000"}
        />
        <spotLight
            position={[-18, 2, 10]}
            angle={0.4}
            intensity={300}
            penumbra={0.2}
            color={"#fff"}
            power={2000}
        />

        {/* <primitive
            object={new THREE.RectAreaLight('#A259FF')}
        /> */}

        {/* <ambientLight intensity={0.2} color="#1a1a40"/>
        
        <directionalLight position={[5, 5, 5]} intensity={5}/> */}
    </>
  )
}

export default HeroLights