import React from 'react'
import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { useMediaQuery } from 'react-responsive';
import { Mailbox } from './Mailbox';
import ContactLights from './ContactLights';

const ContactExperience = () => {
    const isTablet = useMediaQuery({ query: '(max-width: 1024px)'});
    const isMobile = useMediaQuery({ query: '(max-width: 768px)'});
    return (
        <Canvas camera={{ position: [0, 0, 15], fov: 45 }}>
            <ContactLights/>
            <OrbitControls
                enablePan={false}
                enableZoom={!isTablet}
                maxDistance={20}
                minDistance={5}
                minPolarAngle={Math.PI / 8}
                maxPolarAngle={Math.PI / 2}
            />
    
            <group
                scale={isMobile ? 0.4 : 0.6}
                position={[0, -5.5, 0]} // tengah lebih baik
                rotation={[0, Math.PI, 0]}
            >
                <Mailbox />
            </group>
        </Canvas>
    )
}

export default ContactExperience