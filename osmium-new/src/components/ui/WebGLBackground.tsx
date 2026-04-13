"use client";

import { useRef, useEffect } from "react";
import * as THREE from "three";

export function WebGLBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Scene
    const scene = new THREE.Scene();
    // No scene fog — let CSS gradient handle all background color

    // Camera
    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.set(0, 10, 40);
    camera.lookAt(0, 5, 0);

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setClearColor(0x000000, 0);
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Terrain
    const geometry = new THREE.PlaneGeometry(150, 100, 80, 50);
    const pos = geometry.attributes.position;

    for (let i = 0; i < pos.count; i++) {
      const x = pos.getX(i);
      const y = pos.getY(i);

      // Layer 1: Big swells
      let z = Math.sin(x * 0.05) * Math.cos(y * 0.05) * 8;
      // Layer 2: Medium jagged peaks
      z += Math.sin(x * 0.2) * Math.sin(y * 0.2) * 4;
      // Layer 3: High-frequency low-poly crunch
      z += (Math.random() - 0.5) * 1.5;

      // Flatten valleys
      if (z < 0) z *= 0.2;

      pos.setZ(i, z);
    }

    geometry.computeVertexNormals();

    const material = new THREE.MeshStandardMaterial({
      color: 0xc45e2c,
      flatShading: true,
      roughness: 0.7,
      metalness: 0.15,
    });

    const mountains = new THREE.Mesh(geometry, material);
    mountains.rotation.x = -Math.PI / 2.1;
    mountains.position.y = -2;
    scene.add(mountains);

    // Lighting
    scene.add(new THREE.AmbientLight(0xffffff, 0.3));

    const dirLight = new THREE.DirectionalLight(0xffffff, 1.8);
    dirLight.position.set(10, 20, 20);
    scene.add(dirLight);

    const pointLight = new THREE.PointLight(0xff8844, 0.8);
    pointLight.position.set(-20, 10, 10);
    scene.add(pointLight);

    // Mouse parallax
    let mouseX = 0;
    const handleMouseMove = (e: MouseEvent) => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
    };
    window.addEventListener("mousemove", handleMouseMove);

    // Animation
    let animId: number;

    function animate() {
      animId = requestAnimationFrame(animate);
      mountains.rotation.z += 0.0005;
      camera.position.x += (mouseX * 5 - camera.position.x) * 0.05;
      camera.lookAt(0, 5, 0);
      renderer.render(scene, camera);
    }

    animate();

    // Resize
    const handleResize = () => {
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animId);
      renderer.dispose();
      geometry.dispose();
      material.dispose();
      container.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 z-0 pointer-events-none w-full h-full"
    />
  );
}
