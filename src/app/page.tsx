import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Skills } from "@/components/skills"
import { Projects } from "@/components/projects"
import { Experience } from "@/components/experience"
import { Contact } from "@/components/contact"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { StarfieldBackground } from "@/components/starfield-background"

export default function Home() {
  return (
    <div className="min-h-screen bg-background relative">
      <StarfieldBackground /> 
      <main className="relative">
        <Header />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main> 
      <Footer />
    </div>
  )
}
