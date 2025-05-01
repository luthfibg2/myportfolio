import React from 'react'
import { useGLTF } from '@react-three/drei'

export function Mailbox(props) {
  const { nodes, materials } = useGLTF('/models/mailbox.glb')
  return (
    <group {...props} dispose={null}>
      <group position={[-0.651, 1.022, 0.322]} rotation={[-2.13, 1.065, 0.622]}>
        <mesh geometry={nodes.Model_material0_0.geometry} material={materials.material0} rotation={[-Math.PI, 0, 0]} />
      </group>
    </group>
  )
}

useGLTF.preload('/models/mailbox.glb')
