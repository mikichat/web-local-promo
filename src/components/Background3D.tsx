'use client';

import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Environment, ContactShadows, PresentationControls } from '@react-three/drei';
import * as THREE from 'three';

function FloatingShape(props: any) {
  const meshRef = useRef<THREE.Mesh>(null!);
  
  useFrame((state, delta) => {
    meshRef.current.rotation.x += delta * 0.2;
    meshRef.current.rotation.y += delta * 0.3;
  });

  return (
    <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
      <mesh {...props} ref={meshRef}>
        <torusKnotGeometry args={[1, 0.3, 128, 16]} />
        <meshPhysicalMaterial 
          color={props.color} 
          roughness={0.1} 
          metalness={0.8} 
          clearcoat={1} 
          clearcoatRoughness={0.1}
        />
      </mesh>
    </Float>
  );
}

function SphereShape(props: any) {
  const meshRef = useRef<THREE.Mesh>(null!);
  
  useFrame((state, delta) => {
    meshRef.current.rotation.x -= delta * 0.1;
    meshRef.current.rotation.z += delta * 0.1;
  });

  return (
    <Float speed={1.5} rotationIntensity={1} floatIntensity={1.5}>
      <mesh {...props} ref={meshRef}>
        <sphereGeometry args={[0.8, 64, 64]} />
        <meshStandardMaterial 
          color={props.color} 
          roughness={0.2} 
          metalness={0.5} 
        />
      </mesh>
    </Float>
  );
}

export default function Background3D() {
  return (
    <div className="fixed inset-0 z-[-1] bg-gradient-to-br from-gray-900 to-black">
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
        <Environment preset="city" />
        
        <PresentationControls global zoom={0.8} rotation={[0, -Math.PI / 4, 0]} polar={[0, Math.PI / 4]} azimuth={[-Math.PI / 4, Math.PI / 4]}>
          <group position={[0, 0, 0]}>
            <FloatingShape position={[-3, 2, -2]} color="#ff6b6b" />
            <FloatingShape position={[3, -2, -3]} color="#4ecdc4" />
            <SphereShape position={[2, 2, -1]} color="#ffe66d" />
            <SphereShape position={[-2, -2, 0]} color="#ff9ff3" />
            <FloatingShape position={[0, 0, -4]} scale={2} color="#54a0ff" />
          </group>
        </PresentationControls>
        
        <ContactShadows position={[0, -4.5, 0]} opacity={0.4} scale={20} blur={2} far={4.5} />
      </Canvas>
    </div>
  );
}
