import { useEffect, useRef } from "react";
import "./scene.css";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
// import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import j1 from "./files/o3puede6.glb";

// import { GUI } from "three/examples/jsm/libs/lil-gui.module.min.js";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js";


import { RenderPixelatedPass } from 'three/examples/jsm/postprocessing/RenderPixelatedPass.js';
import { OutputPass } from 'three/examples/jsm/postprocessing/OutputPass.js';


const Scene = () => {
  let currentRef = useRef();
  let composer, camera, aspectRatio, renderer, scene
  const ggwp = () => {

    scene = new THREE.Scene();
    aspectRatio = currentRef.current.clientWidth / currentRef.current.clientHeight;

    camera = new THREE.OrthographicCamera(- aspectRatio, aspectRatio, 1, - 1, 0.1, 10);

    scene.add(camera);
    camera.position.set(0, 1, 4);

    renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.shadowMap.enabled = true;

    // let gui, params;
    composer = new EffectComposer(renderer);
    const renderPixelatedPass = new RenderPixelatedPass(2.7, scene, camera);
    composer.addPass(renderPixelatedPass);

    const outputPass = new OutputPass();
    composer.addPass(outputPass);

    // gui = new GUI();
    // // params = { pixelSize: 6, normalEdgeStrength: .3, depthEdgeStrength: .4, pixelAlignedPanning: true };
    // params = { pixelSize: 6, normalEdgeStrength: .2, depthEdgeStrength: .4, pixelAlignedPanning: true };
    // gui.add(params, 'pixelSize').min(1).max(16).step(1)
    //   .onChange(() => {

    //     renderPixelatedPass.setPixelSize(params.pixelSize);

    //   });
    // gui.add(renderPixelatedPass, 'normalEdgeStrength').min(0).max(2).step(.05);
    // gui.add(renderPixelatedPass, 'depthEdgeStrength').min(0).max(1).step(.05);
    // gui.add(params, 'pixelAlignedPanning');
    renderPixelatedPass.normalEdgeStrength = 0.15
    renderPixelatedPass.depthEdgeStrength = 0.1


    let mixer;
    const clock = new THREE.Clock();

    const animate = () => {

      if (mixer) {
        mixer.update(clock.getDelta());
      }
      // orbitControls.update();
      composer.render();
      // renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };
    animate();

    const cleanUpScene = () => {
      currentRef.current.removeChild(renderer.domElement);
    };

    const gltfLoader = new GLTFLoader();

    gltfLoader.load(
      j1,
      (gltf) => {
        gltf.scene.scale.set(0.23, 0.23, 0.23);
        // gltf.scene.scale.set(0.25, 0.25, 0.25);
        let model = gltf.scene;
        scene.add(model);
        mixer = new THREE.AnimationMixer(model);
        const clips = gltf.animations;

        const clip1 = THREE.AnimationClip.findByName(clips, "Animation");
        const action1 = mixer.clipAction(clip1);
        action1.setLoop(THREE.LoopOnce);
        setTimeout(() => {
          action1.play();
        }, 2000);

        setTimeout(() => {
          try {
            currentRef.current.style.opacity = "0";
            setTimeout(() => {
              currentRef.current.style.display = "none";
              cleanUpScene();
            }, 1000);
          } catch (e) { }
        }, 8000);
      },
      () => {
        // console.log("progress");
      },
      () => {
        console.log("no se cargo el osito");
      }
    );

    const light = new THREE.DirectionalLight(0xffffff, 0.5);
    light.position.set(6, 6, 6);
    scene.add(light);
    const lightAmbiental = new THREE.AmbientLight(0xffffff, 3); //1 normal
    scene.add(lightAmbiental);

  }



  useEffect(() => {

    ggwp()
    const resize = () => {

      try {
        // renderer.setSize(currentRef.current.clientWidth, currentRef.current.clientHeight);
        // camera.aspect = currentRef.current.clientWidth / currentRef.current.clientHeight;
        // renderer.setSize(window.innerWidth, window.innerHeight); 
        // camera.aspect = window.innerWidth / window.innerHeight;

        const aspectRatio = currentRef.current.clientWidth / currentRef.current.clientHeight;
        camera.left = - aspectRatio;
        camera.right = aspectRatio;

        renderer.setSize(currentRef.current.clientWidth, currentRef.current.clientHeight);
        // renderer.setPixelRatio(window.devicePixelRatio);
        composer.setSize(currentRef.current.clientWidth, currentRef.current.clientHeight);

        camera.updateProjectionMatrix();

      } catch (e) { }
    };
    window.addEventListener("resize", resize);
    currentRef.current.appendChild(renderer.domElement);
    resize();
  }, []);

  return <div ref={currentRef} className="scene"></div>;
};

export default Scene;
