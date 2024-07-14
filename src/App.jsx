import './App.css'
import Contact from './sections/Contact/Contact.jsx'
import Hero from "./sections/Hero/Hero.jsx"
import Project from './sections/Projects/Project.jsx'
import Skills from './sections/Skills/Skills.jsx'
  

export default function App() {
  return (
    <div>
     <Hero></Hero>
     <Project></Project>
     <Skills></Skills>
     <Contact></Contact>
    </div>
  )
}
