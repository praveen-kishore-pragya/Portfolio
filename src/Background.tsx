import * as THREE from 'three'
import "./App"
import { useEffect } from 'react'


function Background(){
    useEffect(()=>{
        
        //constants
        const values = {
            width : window.innerWidth,
            height : window.innerHeight,
        };

        //Scene
        const scene = new THREE.Scene();
        scene.background = new THREE.Color(0x111827)
        //Shape
        const geometry = new THREE.SphereGeometry(3,64,64)
        const material = new THREE.MeshStandardMaterial({
            color: 0x1ea5bb
        })

        const mesh = new THREE.Mesh(geometry, material);
        scene.add(mesh);
        
        //Light
        const light = new THREE.PointLight(0xffffff, 300, 1000);
        light.position.set(0,10,10);
        scene.add(light);
        
        //Camera
        const camera = new THREE.PerspectiveCamera(45, values.width/values.height, 0.1 , 100);
        camera.position.z = 15;
        scene.add(camera);
  
        //Canvas
        const canvas = document.getElementsByClassName("webgl")[0];
        
        
        
        //Renderer
        const renderer = new THREE.WebGLRenderer({
            canvas
        })
        renderer.setSize(values.width, values.height);
        renderer.setPixelRatio(2);
        
        //Controls
        //Follow Mouse Movements
        const onMouseMove = (event: MouseEvent) => {
            // Normalize mouse coordinates
            const mouseX = (event.clientX / window.innerWidth) * 2 - 1;
            const mouseY = -(event.clientY / window.innerHeight) * 2 + 1;

            // Update light position based on mouse
            light.position.x = mouseX * 10;
            light.position.y = mouseY * 10;
        };



        renderer.render(scene, camera);
        
        
        
        const onWindowResize = () => {
            const resizedWidth = window.innerWidth;
            const resizedHeight = window.innerHeight;
    
            renderer.setSize(resizedWidth, resizedHeight);
            camera.aspect = resizedWidth/resizedHeight;
            camera.updateProjectionMatrix();
        };

        window.addEventListener('resize', onWindowResize);
        window.addEventListener('mousemove', onMouseMove);

        //Loop
        const loop = () =>{
            requestAnimationFrame(loop);
            renderer.render(scene, camera);
        };

        loop();

        //Cleanup
        return () => {
            window.removeEventListener('resize', onWindowResize);
            window.removeEventListener('mousemove', onMouseMove);
            renderer.dispose();
        };

    },[])



    

    return(
        <>
            <div>
                <canvas className='webgl fixed top-0 left-0 -z-10 w-full h-full'></canvas>
            </div>
        </>
    )
}

export default Background