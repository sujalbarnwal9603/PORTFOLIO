import HeroText from "../components/HeroText.jsx"
import ParallaxBackground from "../components/ParallaxBackground.jsx"
const Hero = () => {
  return (
    <section className="flex items-start justify-center min-h-screen overflow-hidden-space md:items-start md:justify-start">
      <HeroText/>
      <ParallaxBackground/>
    </section>
  )
}

export default Hero
