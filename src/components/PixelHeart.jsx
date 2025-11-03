import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';

const PixelHeart = (props) => {
  const groupRef = useRef();
  const { nodes, materials } = useGLTF('/models/pixel-heart.glb');

useFrame((state, delta) => {
  if (props.isAnimating) {
    groupRef.current.rotation.y += delta * 2;
  }
});

  return (
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
  )
}

useGLTF.preload('/models/pixel-heart.glb');

export default PixelHeart;
