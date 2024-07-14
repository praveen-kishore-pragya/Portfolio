import ProjectCard from "./../../common/ProjectCard"
import viberr from "./../../assets/viberr.png"
import "./Project.css"



function Project(){
    return(
        <div className="projectContainer">
            <div className="title">
                <h1>PROJECTS</h1>
            </div>

            <div className="projects">
                <ProjectCard
                    link="https://github.com/praveen-kishore-pragya/WeatherApp"
                    src={viberr}
                    h3="Weather App"
                    p="Know weather of any location">
                </ProjectCard>
                
                <ProjectCard
                    link="https://github.com/praveen-kishore-pragya/WeatherApp"
                    src={viberr}
                    h3="Weather App"
                    p="Know weather of any location">
                </ProjectCard>
                
                <ProjectCard
                    link="https://github.com/praveen-kishore-pragya/WeatherApp"
                    src={viberr}
                    h3="Weather App"
                    p="Know weather of any location">
                </ProjectCard>

            </div>
        </div>
    )
}


export default Project