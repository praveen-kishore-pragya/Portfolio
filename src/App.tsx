import './App.css'
import Background from './Background'
import Contact from './Contact'
import Home from './Home'
import Navbar from './Navbar'

function App() {


  return (
    <>
      <div className="Hero">
        <Background/>
        <Navbar/>
        <Home/>
        <Contact/>
      </div>
    </>
  )
}

export default App
