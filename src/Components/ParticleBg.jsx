import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useMemo, useState } from "react";

const ParticleSphere = () => {
    const ref = useRef();
    const [hovered, setHovered] = useState(false);

    // Generate particles (denser at the edges)
    const particles = useMemo(() => {
        const count = 5000; // Number of particles
        const positions = new Float32Array(count * 3);

        for (let i = 0; i < count; i++) {
            const r = 1 + Math.random() * 0.3; // Slightly larger radius for edge density
            const theta = Math.random() * Math.PI * 2;
            const phi = Math.acos(1 - 2 * Math.random());

            positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
            positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
            positions[i * 3 + 2] = r * Math.cos(phi);
        }

        return positions;
    }, []);

    // Mouse movement effect
    useFrame(({ mouse }) => {
        if (ref.current) {
            ref.current.rotation.y += 0.002;
            ref.current.rotation.x = hovered ? mouse.y * 0.5 : 0;
        }
    });

    return (
        <points
            ref={ref}
            onPointerOver={() => setHovered(true)}
            onPointerOut={() => setHovered(false)}
        >
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    array={particles}
                    count={particles.length / 3}
                    itemSize={3}
                />
            </bufferGeometry>
            <pointsMaterial 
                color="green"
                size={0.02}
                transparent
                opacity={0.8}
                blending={THREE.AdditiveBlending}
            />
        </points>
    );
};

export const ParticleBg = () => {
    return (
        <Canvas camera={{ position: [0, 0, 3] }}>
            <ambientLight intensity={0.5} />
            <ParticleSphere />
        </Canvas>
    );
}
