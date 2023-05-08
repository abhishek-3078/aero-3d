import {Canvas} from '@react-three/fiber'
import {Suspense,useEffect,useState} from 'react'
import {OrbitControls,Preload,SpotLight,useGLTF, useProgress,Html} from '@react-three/drei'
import {PointLight} from "three"

const CanvasLoader=()=>{
    const {progress}=useProgress();
    return (
        <Html>
            <p className='text-[16px] text-[rgb(6,5,5)] font-bold mt-[40px]'>{progress.toFixed(0)}%</p>
        </Html>
    )
}
const Plane=()=>{
    const Plane=useGLTF('/rc_plane/scene.gltf')
    return (
        <mesh>
            <hemisphereLight intensity={0.15}
            groundColor={'#fff'}
            />
            <pointLight intensity={1} position={[0,1,5]}
            castShadow
            shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
            ></pointLight>
            
            <spotLight 
            position={[0,10,0]}
            angle={1}
            penumbra={1}
            intensity={0.5}
            castShadow
            // shadow-mapSize={1024}
            shadow-mapSize-width={2048}
            shadow-mapSize-height={2048}
            shadow-mapSize={2048}
            shadow-camera-left={-10}
            shadow-camera-right={10}
            shadow-camera-top={100}
            shadow-camera-bottom={-10}
            shadow-camera-near={1}
            shadow-camera-far={1}
            shadow-camera-position={[11, 20, 100]}
            shadow-bias={-0.0001}
            />
            <primitive
            object={Plane.scene}
            scale={0.017}
            position={[0,0,1]}
            rotation={[-0.3,2,0.9]}
            >
                
            </primitive>
            
        <shadowMaterial transparent opacity={0.3} />
     
        </mesh>
    )
}

const PlaneCanvas=()=>{
    return (
        <div className='h-[calc(100vh_-_50px)] w-[100vw] bg-blue-500'>
            <Canvas frameloop='demand'
            shadows
            camera={{position:[0,0,10],fov:45}}
            gl={{preserveDrawingBuffer:true}}
            className='w-full h-full bg-slate-400'>
                <Suspense fallback={<CanvasLoader/>}>
                <Plane/>
                </Suspense>
                <OrbitControls  enableZoom={false}
                ></OrbitControls>
                

            </Canvas>
        </div>
    )
}

export default PlaneCanvas;