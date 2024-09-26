import Footer from "./Footer"

function Contact(){
    return(
        <>
        <div className="mt-16 p-64 pb-0 w-full text-center items-center">
            <h1 className="text-2xl text-white font-bold">Contact <span className="text-sky-600">Me!</span></h1>
            <form className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4" action="" method="post">
                <input className="bg-gray-700 rounded-md border-1 p-2 w-200 text-white" type="text" name="fullName" id="fullName" placeholder="Enter Your Name" />
                <input className="bg-gray-700 rounded-md border-1 p-2 w-200 text-white" type="email" name="emailAddress" id="emailAddress" placeholder="Enter Your Email" />
                <input className="bg-gray-700 rounded-md border-1 p-2 w-200 text-white" type="number" name="phoneNumber" id="phoneNumber" placeholder="Enter Your Phone No." />
                <input className="bg-gray-700 rounded-md border-1 p-2 w-200 text-white" type="text" name="emailSubject" id="emailSubject" placeholder="Enter Email Subject" />
                <textarea className="bg-gray-700 rounded-lg sm:col-span-2 p-2 text-white resize-none" rows={10} placeholder="Write Your Message Here!"></textarea>
            </form>
        </div>
        <Footer/>
        </>
    )
}

export default Contact