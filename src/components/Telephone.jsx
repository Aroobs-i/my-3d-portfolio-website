import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';

const Telephone = ({ isTyping, isSubmitted, ...props }) => {
  const group = useRef();
  const handsetRef = useRef();
  const dialRef = useRef();

  const { nodes, materials } = useGLTF('/models/telephone.glb');

  console.log(nodes);


  useFrame((state) => {
    // Dial rotates while typing
    if (isTyping && dialRef.current) {
      dialRef.current.rotation.z += 0.15;
    }

    // Handset shakes after submit
    if (isSubmitted && handsetRef.current) {
      handsetRef.current.rotation.z =
        Math.sin(state.clock.elapsedTime * 20) * 0.08;
    }

    // Fade handset shake back to rest if not submitted anymore
    if (!isSubmitted && handsetRef.current) {
      handsetRef.current.rotation.z *= 0.9;
    }

    // Glow effect when typing
    Object.values(materials).forEach((mat) => {
      if (mat.emissive) {
        mat.emissive.set(isTyping ? "orange" : "black");
        mat.emissiveIntensity = isTyping ? 0.06 : 0;
      }
    });
  });
  
  return (
    <group  ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group scale={0.01}>

            <group position={[0, -0.198, 0.148]} rotation={[-0.215, 0, 0]} ref={handsetRef}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.defaultMaterial_9.geometry} // dialer
                material={materials.Telephone01_Mtl}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.defaultMaterial_10.geometry} //dialerbuttons
                material={materials.Telephone03_Mtl}
              />
            </group>
            <mesh
              ref={dialRef}  // earpiece
              castShadow
              receiveShadow
              geometry={nodes.defaultMaterial.geometry}
              material={materials.Telephone02_Mtl}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.defaultMaterial_1.geometry} //earpiece1
              material={materials.Telephone01_Mtl}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.defaultMaterial_2.geometry} //handle_2
              material={materials.Telephone02_Mtl}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.defaultMaterial_3.geometry}
              material={materials.Telephone01_Mtl}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.defaultMaterial_4.geometry}  //mic
              material={materials.Telephone02_Mtl}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.defaultMaterial_5.geometry}
              material={materials.Telephone03_Mtl}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.defaultMaterial_6.geometry}
              material={materials.Telephone01_Mtl}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.defaultMaterial_7.geometry}
              material={materials.Telephone01_Mtl}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.defaultMaterial_8.geometry}
              material={materials.Telephone01_Mtl}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.defaultMaterial_11.geometry}
              material={materials.Telephone03_Mtl}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.defaultMaterial_12.geometry}
              material={materials.Telephone03_Mtl}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.defaultMaterial_13.geometry}
              material={materials.Telephone03_Mtl}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.defaultMaterial_14.geometry}
              material={materials.Telephone01_Mtl}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.defaultMaterial_15.geometry}
              material={materials.Telephone01_Mtl}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.defaultMaterial_16.geometry}
              material={materials.Telephone02_Mtl}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.defaultMaterial_17.geometry}
              material={materials.Telephone02_Mtl}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.defaultMaterial_18.geometry}
              material={materials.Telephone03_Mtl}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.defaultMaterial_19.geometry}
              material={materials.Telephone01_Mtl}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.defaultMaterial_20.geometry}
              material={materials.Telephone02_Mtl}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.defaultMaterial_21.geometry}
              material={materials.Telephone02_Mtl}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.defaultMaterial_22.geometry}
              material={materials.Telephone02_Mtl}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.defaultMaterial_23.geometry}
              material={materials.Telephone02_Mtl}
            />
          </group>
        </group>
      </group>
    </group>

  )
}


useGLTF.preload('/models/telephone.glb');

export default Telephone;
