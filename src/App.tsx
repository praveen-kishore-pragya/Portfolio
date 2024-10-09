import './App.css'
import Background from './Background'
import Contact from './Contact'
import Home from './Home'
import Navbar from './Navbar'
import Project from './Project'

function App() {


  return (
    <>
      <div className="Hero">
        <Background/>
        <Navbar/>
        <Home/>
        <Project/>
        <Contact/>
      </div>
    </>
  )
}

export default App
