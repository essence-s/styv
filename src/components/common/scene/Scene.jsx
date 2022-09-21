import React, { useEffect, useRef } from "react";
import "./scene.css";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import j1 from "./files/o3puede6.glb"

const Scene = () => {
  //Global variables
  let currentRef;

  //Scene, camera, renderer
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(25, 100 / 100, 0.1, 100);
  // const camera = new THREE.PerspectiveCamera(25, 100 / 100, 0.1, 100);
  scene.add(camera);
  camera.position.set(0, 0, 5);
  // camera.translateZ(30)
  // camera.position.set(5, 5, 5);
  camera.lookAt(new THREE.Vector3());

  camera.rotation.set(0.21,0,0)



  const renderer = new THREE.WebGLRenderer({antialias:true});
  renderer.setSize(100, 100);
  // renderer.setSize(100, 100);
  renderer.setClearColor( 0xffffff, 0);

  //OrbitControls
  // const orbitControls = new OrbitControls(camera, renderer.domElement);
  // orbitControls.enableDamping = true;

  //Resize canvas
  const resize = () => {
    console.log(currentRef)
    renderer.setSize(currentRef.clientWidth, currentRef.clientHeight);
    camera.aspect = currentRef.clientWidth / currentRef.clientHeight;
    camera.updateProjectionMatrix();
  };
  window.addEventListener("resize", resize);

  let mixer;

  const clock = new THREE.Clock()
  //Animate the scene
  const animate = () => {
    if(mixer){
      mixer.update(clock.getDelta())
    }
    // orbitControls.update();
    renderer.render(scene, camera);
    requestAnimationFrame(animate);
  };
  animate();

  const cleanUpScene = () => {
    // scene.dispose();
    currentRef.removeChild(renderer.domElement);
  }

  const gltfLoader = new GLTFLoader();

  gltfLoader.load(
    j1,
    (gltf) => {

      gltf.scene.scale.set(0.22, 0.22, 0.22);

      let model = gltf.scene
      scene.add(model);
      mixer = new THREE.AnimationMixer(model)
      const clips = gltf.animations;

      const clip1 = THREE.AnimationClip.findByName(clips, 'Animation')
      const action1 = mixer.clipAction(clip1)
      action1.setLoop(THREE.LoopOnce)
      setTimeout(()=>{
        action1.play()
      },2000)

      setTimeout(()=>{
        mountRef.current.style.opacity='0'
        setTimeout(()=>{
          mountRef.current.style.display='none'
          cleanUpScene()
        },1000)
      },8000)
        
    },
    () => {
      console.log("progress");
    },
    () => {
      console.log("error");
    }
  );
 
  const light = new THREE.DirectionalLight(0xffffff,0.5)
  light.position.set(6, 6, 6)
  scene.add(light)
  const lightAmbiental = new THREE.AmbientLight(0xffffff,1) //1 normal
  scene.add(lightAmbiental)

  let mountRef = useRef();

  

  useEffect(() => {
    currentRef = mountRef.current;
    resize();
    currentRef.appendChild(renderer.domElement);
  }, []);

  return <div ref={mountRef} className="scene"></div>;
};

export default Scene;
