import { useEffect, useRef } from "react";
import "./scene2.css";
import * as THREE from "three";
// import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import sheet from './files/i2.png'
import mage from './files/i1.png'
import { SpriteFlipbook } from './spritea.js'

const Scene2 = () => {
  let directionalLight = new THREE.SpotLight(0xffffff, 2, 50, 0.2, .05, 0);
  let currentRef = useRef();
  let camera, aspectRatio, renderer, scene

  const ggwp = () => {

    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x151729);
    aspectRatio = currentRef.current.clientWidth / currentRef.current.clientHeight;

    camera = new THREE.OrthographicCamera(- aspectRatio, aspectRatio, 1, - 1, 0.1, 100);

    camera.position.z = 1;
    // camera.zoom = 1.2
    scene.add(camera);

    renderer = new THREE.WebGLRenderer();
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap
    renderer.setSize(currentRef.current.clientWidth, currentRef.current.clientHeight);


    // OrbitControls
    // const orbitControls = new OrbitControls(camera, renderer.domElement);
    // orbitControls.enableDamping = true;


    const flipBook = new SpriteFlipbook(sheet.src, 8, 8, scene, 1.9)

    flipBook.loop(59, 6)
    flipBook.sprite.castShadow = true;
    flipBook.sprite.receiveShadow = true;
    flipBook.sprite.position.set(0, 1, 0);

    const flipBook2 = new SpriteFlipbook(mage.src, 4, 4, scene, 1.4)

    flipBook2.loop(16, 1.2)
    flipBook2.sprite.castShadow = true;
    flipBook2.sprite.receiveShadow = true;
    flipBook2.sprite.position.set(0, -0.2, 0);


    const groundGeometry = new THREE.PlaneGeometry(10, 10);
    const groundMaterial = new THREE.MeshStandardMaterial({ color: 0x19191a });
    const ground = new THREE.Mesh(groundGeometry, groundMaterial);
    ground.receiveShadow = true;
    // ground.rotation.x = -Math.PI / 2; // plano en el suelo
    ground.position.set(0, 0, -1)
    scene.add(ground);

    const clock = new THREE.Clock();
    let requestId
    const animate = () => {
      requestId = requestAnimationFrame(animate);
      let deltaTime = clock.getDelta()
      flipBook.update(deltaTime)
      flipBook2.update(deltaTime)
      renderer.render(scene, camera);


    };
    // animate();

    const lightAmbiental = new THREE.AmbientLight(0xffffff, 0.5); //1 normal

    scene.add(lightAmbiental);

    directionalLight.position.set(1.8, 0, 8);
    // directionalLight.angle = 0.4;
    // // directionalLight.penumbra = 0.05;
    // directionalLight.decay = 0;
    directionalLight.castShadow = true;
    // directionalLight.shadow.mapSize.set(1024, 1024);
    directionalLight.shadow.bias = -0.002
    scene.add(directionalLight);


    // start render
    function start() {
      animate();
    }

    // stop render
    function stop() {
      window.cancelAnimationFrame(requestId);
      requestId = undefined;
    }

    const intersectionObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          start();
          console.log('render has been started');
        } else {
          stop();
          console.log('render has been halted');
        }
      });
    });

    // let footer = document.querySelector('.footer')
    // intersectionObserver.observe(footer)
    intersectionObserver.observe(renderer.domElement)
  }


  useEffect(() => {

    // console.log('ggg')
    ggwp()
    const resize = () => {
      try {
        const aspectRatio = currentRef.current.clientWidth / currentRef.current.clientHeight;
        camera.left = - aspectRatio;
        camera.right = aspectRatio;
        renderer.setSize(currentRef.current.clientWidth, currentRef.current.clientHeight);
        camera.updateProjectionMatrix();

      } catch (e) { }
    };
    window.addEventListener("resize", resize);
    currentRef.current.appendChild(renderer.domElement);
    resize();
  }, []);

  return <div ref={currentRef} className="scene2"></div>;
};

export default Scene2;
