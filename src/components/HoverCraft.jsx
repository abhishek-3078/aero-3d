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
const Hover=()=>{
    const Hover=useGLTF('/hover/scene.gltf')
  
    return (
        <mesh>
            <hemisphereLight intensity={0.15}
            groundColor={'#fff'}
            position={[0,0,1]}
            />
            <pointLight intensity={0.5} position={[0,100,0]}
           
            ></pointLight>
            <pointLight intensity={0.3} position={[-100,0,0]}
            
            ></pointLight>
            
            <pointLight intensity={0.8} position={[0,0,100]}
          
            ></pointLight>
            
            <spotLight 
            position={[0,100,0]}
            angle={1}
            penumbra={1}
            intensity={1}
            castShadow
            shadow-mapSize={1024}
            />
            <spotLight 
            position={[100,100,100]}
            angle={1}
            penumbra={1}
            intensity={1}
            castShadow
            shadow-mapSize={1024}
            />
            <primitive
            object={Hover.scene}
            scale={0.4}
            position={[0,0,1]}>

            </primitive>
           

        </mesh>
    )
}
const Hover2=()=>{
    const Hover2=useGLTF('/hover2/scene.gltf')
    return (
        <mesh >
            <hemisphereLight intensity={0.15}
            groundColor={'#fff'}
            position={[0,0,1]}
            />
            <pointLight intensity={0.5} position={[0,100,0]}
           
            ></pointLight>
            
           
            <spotLight 
            position={[100,100,100]}
            angle={1}
            penumbra={1}
            intensity={1}
            castShadow
            shadow-mapSize={1024}
            />
        
            <primitive
            object={Hover2.scene}
            scale={0.8}
            position={[0,0,1]}
            >

            </primitive>

        </mesh>
    )
}

const HoverCanvas=()=>{
    return (
        <div className='h-[calc(100vh_-_50px)] w-[100vw] bg-blue-500 flex  2xl:flex-row sm:flex-col'>
            <Canvas frameloop='demand'
            castShadow
        
            camera={{position:[0,0,10],fov:45}}
            gl={{preserveDrawingBuffer:true}}
            className='h-[100px] w-full min-w- bg-slate-400'>
                <Suspense fallback={<CanvasLoader/>}>
                <Hover/>
               
                </Suspense>
                <OrbitControls 
                ></OrbitControls>
            </Canvas>
            <Canvas frameloop='demand'
            castShadow
            camera={{position:[0,0,10],fov:45}}
            gl={{preserveDrawingBuffer:true}}
            className='h-[100px] w-full bg-slate-400'>
                <Suspense fallback={<CanvasLoader/>}>
                <Hover2/>
               
                </Suspense>
                <OrbitControls
                autoRotate 
                
                ></OrbitControls>
            </Canvas>
        </div>
    )
}

export default HoverCanvas;