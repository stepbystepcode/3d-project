import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

function Space() {
  const mountRef = useRef(null);
  useEffect(() => {
    // 场景设置
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    if (mountRef.current)
    mountRef.current.appendChild(renderer.domElement);

    // 添加光源
    const light = new THREE.AmbientLight(0xffffff); // 白色环境光
    scene.add(light);

    // 相机位置
    camera.position.z = 5;

    // 加载模型
    const loader = new GLTFLoader();
    loader.load(
      '/scene.gltf', // 模型路径
      (gltf) => {
        scene.add(gltf.scene);
      },
      undefined,
      (error) => {
        console.error('An error happened loading the GLTF model:', error);
      }
    );

    // 控制器设置
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true; // 启用阻尼（惯性），这会给控制带来重量感
    controls.dampingFactor = 0.05;
    controls.screenSpacePanning = false;
    controls.minDistance = 1;
    controls.maxDistance = 10;
    controls.maxPolarAngle = Math.PI / 2;

    // 渲染循环
    const animate = function () {
      requestAnimationFrame(animate);
      controls.update(); // 只有在控制器启用阻尼时才需要在动画循环中调用
      renderer.render(scene, camera);
    };
    animate();

    // 清理函数
    return () => {
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement); // 确保 mountRef.current 不为 null
      }
      scene.clear();
      renderer.dispose();
      if (controls) controls.dispose(); // 确保 controls 已经被定义
    };
  }, []);
  return <div ref={mountRef} />;
}
export default Space;
