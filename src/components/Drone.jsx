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
const Drone=()=>{
    const drone=useGLTF('/drone/scene.gltf')
    return (
        <mesh>
            <hemisphereLight intensity={0.15}
            groundColor={'#fff'}
            />
            <pointLight intensity={1} position={[0,1,5]}
            castShadow
            ></pointLight>
            
            <spotLight 
            position={[0,10,0]}
            angle={1}
            penumbra={1}
            intensity={1}
            castShadow
            shadow-mapSize={1024}
            />
            <primitive
            object={drone.scene}
            scale={0.5}
            position={[0,0,1]}>

            </primitive>

        </mesh>
    )
}

const DroneCanvas=()=>{
    return (
        <div className='h-[calc(100vh_-_50px)] w-[100vw] bg-blue-500'>
            <Canvas frameloop='demand'
            castShadow
            camera={{position:[0,0,10],fov:45}}
            gl={{preserveDrawingBuffer:true}}
            className='h-[100px] w-full bg-slate-400'>
                <Suspense fallback={<CanvasLoader/>}>
                <Drone/>
                </Suspense>
                <OrbitControls autoRotate
                ></OrbitControls>
                

            </Canvas>
        </div>
    )
}

export default DroneCanvas;