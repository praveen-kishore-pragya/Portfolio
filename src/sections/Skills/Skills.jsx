import "./Skills.css"
import checkMarkIconDark from "./../../assets/checkmark-dark.svg"
import checkMarkIconLight from "./../../assets/checkmark-dark.svg"

import { useTheme } from "./../../common/ThemeContext"
import SkillCard from "../../common/SkillCard";



function Skills(){
    const { theme } = useTheme();
    const checkMarkIcon = theme === 'light' ? checkMarkIconLight : checkMarkIconDark

    return (
        <div className="skillsSection">
            <h1 className="title">SKILLS</h1>
            
            <div className="skillsList">
                
                <SkillCard
                    src={checkMarkIcon}
                    skill="HTML"
                >
                </SkillCard>
                
                <SkillCard
                    src={checkMarkIcon}
                    skill="CSS"
                >
                </SkillCard>

                <SkillCard
                    src={checkMarkIcon}
                    skill="React.js"
                >
                </SkillCard>
                
                <SkillCard
                    src={checkMarkIcon}
                    skill="TypeScript"
                >
                </SkillCard>
                
                <SkillCard
                    src={checkMarkIcon}
                    skill="Thymeleaf"
                >
                </SkillCard>

                <SkillCard
                    src={checkMarkIcon}
                    skill="Bootstrap"
                >
                </SkillCard>

            </div>


            <hr />


            <div className="skillsList">
                
                <SkillCard
                    src={checkMarkIcon}
                    skill="HTML"
                >
                </SkillCard>
                
                <SkillCard
                    src={checkMarkIcon}
                    skill="CSS"
                >
                </SkillCard>

                <SkillCard
                    src={checkMarkIcon}
                    skill="React.js"
                >
                </SkillCard>
                
                <SkillCard
                    src={checkMarkIcon}
                    skill="TypeScript"
                >
                </SkillCard>
                
                <SkillCard
                    src={checkMarkIcon}
                    skill="Thymeleaf"
                >
                </SkillCard>

                <SkillCard
                    src={checkMarkIcon}
                    skill="Bootstrap"
                >
                </SkillCard>

            </div>

            <hr />
            
            
            <div className="skillsList">
                
                <SkillCard
                    src={checkMarkIcon}
                    skill="HTML"
                >
                </SkillCard>
                
                <SkillCard
                    src={checkMarkIcon}
                    skill="CSS"
                >
                </SkillCard>

                <SkillCard
                    src={checkMarkIcon}
                    skill="React.js"
                >
                </SkillCard>
                
                <SkillCard
                    src={checkMarkIcon}
                    skill="TypeScript"
                >
                </SkillCard>
                
                <SkillCard
                    src={checkMarkIcon}
                    skill="Thymeleaf"
                >
                </SkillCard>

                <SkillCard
                    src={checkMarkIcon}
                    skill="Bootstrap"
                >
                </SkillCard>

            </div>

            <hr />

        </div>
    )
}


export default Skills