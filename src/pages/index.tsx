import Left from "@/components/Left";
import SocialIcons from "@/components/SocialIcons";
import Hero from "@/sections/Hero";
import Navbar from "@/sections/Navbar"
import Projects from "@/sections/Projects";


function Index() {
  return (
    <div className="app">
      <Navbar />
      <Left />
      <SocialIcons />
      <Hero />
      <Projects />
    </div>
  )
}

export default Index