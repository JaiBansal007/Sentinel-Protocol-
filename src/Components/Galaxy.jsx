import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { EffectComposer, Bloom } from '@react-three/postprocessing'
const Cover=()=> {
    const starsRef = useRef();

    // Generate star positions
    const starsGeometry = useMemo(() => {
        const starCount = 10000;
        const positions = new Float32Array(starCount * 3);

        for (let i = 0; i < starCount; i++) {
            const radius = Math.random() * 100;
            const angle = Math.random() * Math.PI;
            const spiral = Math.random() * 0.5;

            positions[i * 3] = Math.cos(angle) * radius + (Math.random() - 0.5) * spiral;
            positions[i * 3 + 1] = Math.sin(angle) * radius + (Math.random() - 0.5) * spiral;
            positions[i * 3 + 2] = (Math.random() - 0.5) * 50;
        }

        const geometry = new THREE.BufferGeometry();
        geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        return geometry;
    }, []);

    // Animate the galaxy
    useFrame(() => {
        if (starsRef.current) {
            starsRef.current.rotation.y += 0.001;
            starsRef.current.rotation.x += 0.0005;
        }
    });

    return (
        <points ref={starsRef}>
            <bufferGeometry attach="geometry" {...starsGeometry} />
            <pointsMaterial
                attach="material"
                color={0xffffff}
                size={0.12}
                transparent
                opacity={0.8}
                blending={THREE.AdditiveBlending}
            />
        </points>
    );
}

export const Galaxy=()=>{
    return (
        <div className='h-[100vh] w-[100vw] absolute -z-10 '>
              <Canvas
                    style={{ background: 'black' }}
                    camera={{ position: [50, 50, 50], fov:10 }}
                >
                    <Cover />
                    <EffectComposer>
                        <Bloom intensity={0.9} />
                    </EffectComposer>
                </Canvas>
        </div>
    )
}

