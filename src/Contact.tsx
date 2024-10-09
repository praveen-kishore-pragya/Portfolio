import Footer from "./Footer"

function Contact(){
    return(
        <>
        <h1 className="flex text-center justify-center align-middle mt-16 text-2xl text-white font-bold ">Contact <span className="text-sky-600 ml-2">Me!</span></h1>
        <div className="contact z-5 flex items-center justify-between p-8 mx-auto flex flex-wrap sm:flex-nowrap relative">
            
        <div className="lg:w-2/3 md:w-1/2 overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <iframe
            title="map"
            className=" bg-yellow-500 rounded-lg border-4 h-full w-ful lg:h-96 lg:w-2/3 md:h-80 md:2-1/2"
            style={{ filter: "opacity(0.7)" }}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d83415.76897066344!2d12.378689630593897!3d49.20543890090608!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479ffce5f5264851%3A0x41d25a40937ce40!2sRoding%2C%20Germany!5e0!3m2!1sen!2sin!4v1728427509061!5m2!1sen!2sin"
          />
        </div>


            <div className=" right mt-16 ml-4 flex flex-col text-center">
                <form className="flex flex-row text-right mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4" action="" method="post">
                    <input className="bg-gray-700 rounded-md border-1 mr-4 p-2 w-80 text-white" type="text" name="fullName" id="fullName" placeholder="Enter Your Name" />
                    <input className="bg-gray-700 rounded-md border-1  p-2 w-80 text-white" type="email" name="emailAddress" id="emailAddress" placeholder="Enter Your Email" />
                    <input className="bg-gray-700 rounded-md border-1 mr-4 p-2 w-80 text-white" type="number" name="phoneNumber" id="phoneNumber" placeholder="Enter Your Phone No." />
                    <input className="bg-gray-700 rounded-md border-1  p-2 w-80 text-white" type="text" name="emailSubject" id="emailSubject" placeholder="Enter Email Subject" />
                    <textarea className="bg-gray-700 rounded-lg col-span-1 sm:col-span-2 p-2 text-white resize-none" rows={10} placeholder="Write Your Message Here!"></textarea>
                </form>
            </div>

        </div>

        <Footer/>
        </>
    )
}

export default Contact