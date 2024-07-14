// import "./Contact.css"

function Contact(){
    return (
        <div className="contactSection">
            <h1 className="title">Contact</h1>
            <form action="">
                <div className="formGroup">
                    <label htmlFor="name" hidden>Name</label>
                    <input 
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Name"
                        required
                    />
                </div>
                
                <div className="formGroup">
                    <label htmlFor="email" hidden>Email</label>
                    <input 
                        type="text"
                        name="email"
                        id="email"
                        placeholder="Email"
                        required
                    />
                </div>

                <div className="formGroup">
                    <label htmlFor="message" hidden>Message</label>
                    <textarea 
                        name="message"
                        id="message"
                        placeholder="Message"
                        required
                    >
                    </textarea>
                </div>

                <input className="hover btn" type="submit" value="Submit" />
            
            </form>
        </div>
    )
}


export default Contact