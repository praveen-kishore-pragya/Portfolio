function SkillCard({src, skill}){
    return (
        <div className="skill">
            <span>
                <img src={src} alt="checkMarkIcon" />
                <p>{skill}</p>
            </span>
        </div>
    )
}


export default SkillCard