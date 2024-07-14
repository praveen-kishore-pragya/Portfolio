import sun from './../../assets/sun.svg'
import moon from './../../assets/moon.svg'

import githubDark from './../../assets/github-dark.svg'
import githubLight from './../../assets/github-light.svg'

import linkedinDark from './../../assets/linkedin-dark.svg'
import linkedinLight from './../../assets/linkedin-light.svg'

import leetcodeLight from './../../assets/leetcode-light.svg'
import leetcodeDark from './../../assets/leetcode-dark.svg'

import heroImg from './../../assets/hero-img.png'

import CV from './../../assets/Praveen_Kishore_Pragya.pdf'

import { useTheme } from './../../common/ThemeContext'

import "./Hero.css"

function Hero(){

  const {theme, toggleTheme} = useTheme();
  // const temp = useTheme();
  // console.log(temp);
  // const theme = 'light'

  const themeIcon = theme === 'light' ? sun : moon;

  const githubIcon = theme === 'light' ? githubLight : githubDark;

  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;

const leetcodeIcon = theme === 'light' ? leetcodeLight : leetcodeDark;
  
  return (
    <div className='heroSection'>

      <div className="topLayer">
      
          <img
            className="hero-image"
            src={heroImg}
          >
          </img>

          <img
            className="displayMode"
            src={themeIcon}
            onClick={toggleTheme}
          >
          </img>
       
      </div>

      
      

      <div className="hero-name">
        <h1>PRAVEEN
        <br/>
          KISHORE
        <br/>
          PRAGYA
        <br/>
        </h1>
      </div>
      
      <div className="hero-designation">
        <h2>FULL - STACK DEVELOPER</h2>
      </div>

      <div className="hero-skills">
        <a href="https://github.com/praveen-kishore-pragya" target='_blank'>
          <img src={githubIcon} alt="GitHub Icon"></img>
        </a>
        
        <a href="https://www.linkedin.com/in/praveen-kishore-pragya-b24b37197/" target='_blank'>
          <img src={linkedinIcon} alt="Linkedin Icon"></img>
        </a>
        
        <a href="https://leetcode.com/u/psm_1/" target='_blank'>
          <img src={leetcodeIcon} alt='leetcodeIcon'></img>
        </a>
      </div>

      <div className='hero-about'>
        <p>
          With a passion to build things.
        </p>
      </div>

      
      <a href={CV} download>
        <button className='hover'>Resume</button>
      </a>
      
      
    </div>
  )
}

export default Hero;