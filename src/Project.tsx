import { projects } from "./data.ts"
function Project(){
    return (
        <>
            <h1 className="project-header text-2xl mb-8 text-white font-bold text-center">Projects</h1>
            
            <div className="project-section mt-16 flex flex-row justify-center text-center items-center">
                <div className="projects-tiles flex flex-wrap grid grid-cols-2">
                    {
                        projects.map( (project) => (
                            <a 
                                href={project.link}
                                key={project.title}
                                className="sm:w-1/2 w-100 p-4 border-2 border-slate-800 rounded-lg backdrop-brightness-50 mb-2 mx-2"
                            >
                                <div className="project-card ">
                                    
                                    <div className="project-title">
                                        <h2 className="text-xl text-white font-bold mb-1">{project.title}</h2>
                                    </div>
                                    
                                    <div className="project-tech-stack">
                                        <h3 className="text-orange-600 font-bold mb-2.5">{project.tech}</h3>
                                    </div>
                                    
                                    <div className="project-desc">
                                        <h3 className="text-gray-400 font-medium">{project.description}</h3>
                                    </div>

                                </div>
                            </a>
                        ) )
                    }
                </div>
            </div>
        </>
    )
}

export default Project