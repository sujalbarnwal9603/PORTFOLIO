import { Canvas } from "@react-three/fiber"
import HeroText from "../components/HeroText.jsx"
import ParallaxBackground from "../components/ParallaxBackground.jsx"
import  Astronaut  from "../components/Astronaut.jsx"
import { OrbitControls } from "@react-three/drei"

const Hero = () => {
  return (
    <section className="flex items-start justify-center min-h-screen overflow-hidden-space md:items-start md:justify-start">
      <HeroText/>
      <ParallaxBackground/>
      <figure className="absolute inset-0"
      style={{width:"100vw", height:"100vh"}}>
        <Canvas>
          <Astronaut/>
          <OrbitControls/>
        </Canvas>
      </figure>
    </section>
  )
}

export default Hero
