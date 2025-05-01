import React from 'react'

const ContactLights = () => {
  return (
    <>
      {/* Cahaya merata global */}
      <ambientLight intensity={0.5} />

      {/* Cahaya dari satu arah seperti matahari */}
      <directionalLight
        position={[5, 5, 5]}
        intensity={1.2}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        color={"#ff1111"}
      />

      {/* Spot cahaya artistik */}
      <spotLight
        position={[-10, 5, 10]}
        angle={0.4}
        penumbra={0.3}
        intensity={1}
        color={"#ffffff"}
        castShadow
      />
    </>
  )
}

export default ContactLights
