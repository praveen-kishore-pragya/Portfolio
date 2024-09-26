function Navbar(){
    return (
        <>
            <div className="navbar h-16 px-8 flex justify-between p-4 text-white fixed w-full top-0 left-0 z-10 border-b-2 border-gray-800">
                <div className="left">
                    <ul className="flex">
                        <li className="cursor-pointer"><img className="h-8 w-8" src="/ProfilePhoto.jpeg" alt="Profile-Photo" /></li>
                    </ul>
                </div>
                <div className="right">
                    <ul className="flex space-x-4">
                        <li className="cursor-pointer hover:font-bold hover:text-blue-700 hover:scale-110 ">Home</li>
                        <li className="cursor-pointer hover:font-bold hover:text-blue-700 hover:scale-110">About</li>
                        <li className="cursor-pointer hover:font-bold hover:text-blue-700 hover:scale-110">Experiences</li>
                        <li className="cursor-pointer hover:font-bold hover:text-blue-700 hover:scale-110">Projects</li>
                        <li className="cursor-pointer hover:font-bold hover:text-blue-700 hover:scale-110">Contact</li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Navbar