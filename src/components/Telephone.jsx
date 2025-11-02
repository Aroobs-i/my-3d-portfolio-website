import { useGLTF } from '@react-three/drei'
import { useRef } from 'react';

const Telephone = (props) => {
  const group = useRef();
  const { nodes, materials } = useGLTF('/models/telephone.glb');
  
  return (
    <group  ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group scale={0.01}>
            <group position={[0, -0.198, 0.148]} rotation={[-0.215, 0, 0]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.defaultMaterial_9.geometry}
                material={materials.Telephone01_Mtl}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.defaultMaterial_10.geometry}
                material={materials.Telephone03_Mtl}
              />
            </group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.defaultMaterial.geometry}
              material={materials.Telephone02_Mtl}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.defaultMaterial_1.geometry}
              material={materials.Telephone01_Mtl}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.defaultMaterial_2.geometry}
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
              geometry={nodes.defaultMaterial_4.geometry}
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
