import Left from "@/components/Left";
import SocialIcons from "@/components/SocialIcons";
import Hero from "@/sections/Hero";
import Navbar from "@/sections/Navbar"


function Index() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <SocialIcons />
      <Left />
    </div>
  )
}

export default Index