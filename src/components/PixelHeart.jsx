import { useGSAP } from '@gsap/react';
import { Float, useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber';
import gsap from 'gsap';
import { useRef } from 'react';

const PixelHeart = (props) => {
  const groupRef = useRef();
  const { nodes, materials } = useGLTF('/models/pixel-heart.glb');

useFrame((state, delta) => {
  if (props.isAnimating) {
    groupRef.current.rotation.y += delta * 2;
  }
});

useGSAP(() => {
  gsap.to(groupRef.current.position, {
      y: groupRef.current.position.y + 0.5,
      duration: 1.5,
      repeat: -1,
      yoyo: true,
  })
});

  return (
   <Float floatIntensity={0.5}>
    <group  ref={groupRef} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_2.geometry}
        material={materials.Wool}
        rotation={[-Math.PI / 2, 0, 0]}
        material-transparent={true}
      />
    </group>
    </Float>
  )
}

useGLTF.preload('/models/pixel-heart.glb');

export default PixelHeart;
