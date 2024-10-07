import HomeTyped from "./Home-Typed"

function Home(){
    return (
        <>
            <div className="home mt-16 z-5 min-h-screen flex items-center mx-16 justify-between relative">
                <div className="left flex flex-col items-center text-center">
                    {/* <div className="intro mb-4"> */}
                        <span className="text-2xl text-lime-600">Hello, It's Me</span><br/>
                        <span className="text-5xl text-white"><span className="text-cyan-800">Praveen</span> Kishore Pragya</span><br/>
                        <div className="flex space-x-2 text-3xl mt-4">
                            <span className="text-rose-900">And I'm a</span>
                            <span className="text-amber-600"><HomeTyped/></span>
                        </div>
                        <div className="links flex mt-4">
                            <ul className="flex space-x-3">
                                <li><a href="https://github.com/praveen-kishore-pragya" target="_blank"><img className="h-11 w-11" src="/github-light.svg" alt="GitHub"/></a></li>
                                <li><a href="https://www.linkedin.com/in/praveen-kishore-pragya-b24b37197/" target="_blank"><img className="h-11 w-11" src="/linkedin-light.svg" alt="LinkedIn"/></a></li>
                                <li><a href="https://leetcode.com/u/psm_1/" target="_blank"><img className="h-11 w-11" src="/leetcode-dark.svg" alt="LeetCode"/></a></li>
                            </ul>
                        </div>
                        <a href="/Praveen_Kishore_Pragya.pdf">
                        <button className="text-2xl mt-8 p-2 rounded-lg text-blue-400 font-bold border-solid border-4 border-indigo-950 hover:scale-110 hover:text-teal-600">
                            Download CV
                        </button>
                        </a>
                    {/* </div>       */}
                </div>

            

                <div className="right flex-shrink-0">
                    <img className="rounded-2xl hover:border-8 border-indigo-800 hover:scale-105" src="/ProfilePhoto.png" alt="" />
                </div>

            </div>
        </>
    )
}

export default Home