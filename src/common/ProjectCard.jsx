function ProjectCard({link, src, h3, p}){
    return(
        <div>
            <a
                href={link}
                target="_blank"
            >
                <img src={src} alt={`${h3} logo`} />
                <h3>{h3}</h3>
                <p>{p}</p>
            </a>
        </div>
    )
}

export default ProjectCard