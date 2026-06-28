"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

function seededRandom(seed: number) {
  const value = Math.sin(seed * 12.9898) * 43758.5453;

  return value - Math.floor(value);
}

function createPositions(count: number) {
  const values = new Float32Array(count * 3);

  for (let index = 0; index < count; index += 1) {
    const radius = 3 + seededRandom(index + 1) * 5.5;
    const theta = seededRandom(index + 101) * Math.PI * 2;
    const phi = Math.acos(2 * seededRandom(index + 201) - 1);

    values[index * 3] = radius * Math.sin(phi) * Math.cos(theta);
    values[index * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta) * 0.6;
    values[index * 3 + 2] = radius * Math.cos(phi);
  }

  return values;
}

export default function ParticleBackground() {
  const hostRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const host = hostRef.current;

    if (!host) {
      return;
    }

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(55, 1, 0.1, 100);
    camera.position.z = 9;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: false,
      powerPreference: "low-power",
    });

    renderer.setClearColor(0x000000, 0);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    host.appendChild(renderer.domElement);

    const count = window.innerWidth < 768 ? 550 : 1300;
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute(
      "position",
      new THREE.BufferAttribute(createPositions(count), 3),
    );

    const material = new THREE.PointsMaterial({
      color: "#7dd3fc",
      depthWrite: false,
      opacity: 0.72,
      size: 0.025,
      sizeAttenuation: true,
      transparent: true,
    });

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    const sphereGeometry = new THREE.SphereGeometry(1.55, 48, 24);
    const sphereMaterial = new THREE.MeshBasicMaterial({
      color: "#93c5fd",
      opacity: window.innerWidth < 768 ? 0.14 : 0.24,
      transparent: true,
      wireframe: true,
    });
    const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
    sphere.position.set(1.8, -0.2, 0.8);
    sphere.scale.set(1.25, 1.25, 1.25);
    scene.add(sphere);

    const resize = () => {
      const width = host.clientWidth;
      const height = host.clientHeight;

      renderer.setSize(width, height, false);
      camera.aspect = width / Math.max(height, 1);
      camera.updateProjectionMatrix();
    };

    let frameId = 0;
    let previousTime = performance.now();
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const render = (time: number) => {
      const delta = (time - previousTime) / 1000;
      previousTime = time;

      if (!reducedMotion) {
        particles.rotation.y += delta * 0.035;
        particles.rotation.x = Math.sin(time * 0.00018) * 0.08;
        sphere.rotation.y -= delta * 0.12;
        sphere.rotation.x += delta * 0.06;
      }

      renderer.render(scene, camera);
      frameId = window.requestAnimationFrame(render);
    };

    resize();
    window.addEventListener("resize", resize);
    frameId = window.requestAnimationFrame(render);

    return () => {
      window.removeEventListener("resize", resize);
      window.cancelAnimationFrame(frameId);
      geometry.dispose();
      material.dispose();
      sphereGeometry.dispose();
      sphereMaterial.dispose();
      renderer.dispose();
      renderer.domElement.remove();
    };
  }, []);

  return (
    <div
      ref={hostRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 opacity-80 [mask-image:linear-gradient(to_bottom,black,transparent_92%)]"
    />
  );
}
