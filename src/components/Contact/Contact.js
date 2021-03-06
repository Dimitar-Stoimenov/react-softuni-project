import { useNavigate } from "react-router-dom";

const Contact = () => {
    const navigate = useNavigate();
    const buttonClick = (e) => {
        e.preventDefault();

        let { name, email, subject, message } = Object.fromEntries(new FormData(e.currentTarget));

        if (name == "" || email == "" || subject == '' || message == '') {
            return alert('All fields are required!')
        } else {
            navigate('/contact/message-received');
        }
    }

    return (
        <>
            <div className="container-fluid bg-light py-5">
                <div className="col-md-6 m-auto text-center">
                    <h1 className="h1">Contact Us</h1>
                    <p>
                        We're here to help and answer any question you might have.
                    </p>
                    <p>
                        We look forward to hearing from you.
                    </p>
                </div>
            </div>

            <div className="container py-5">
                <div className="row py-5">
                    <form className="col-md-9 m-auto" onSubmit={buttonClick}>
                        <div className="row">
                            <div className="form-group col-md-6 mb-3">
                                <label htmlFor="inputname">Name</label>
                                <input type="text" className="form-control mt-1" id="name" name="name" placeholder="Name" />
                            </div>
                            <div className="form-group col-md-6 mb-3">
                                <label htmlFor="inputemail">Email</label>
                                <input type="email" className="form-control mt-1" id="email" name="email" placeholder="Email" />
                            </div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="inputsubject">Subject</label>
                            <input type="text" className="form-control mt-1" id="subject" name="subject" placeholder="Subject" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="inputmessage">Message</label>
                            <textarea className="form-control mt-1" id="message" name="message" placeholder="Message" rows="8"></textarea>
                        </div>
                        <div className="row">
                            <div className="col text-end mt-2">
                                <button type="submit" className="btn btn-success btn-lg px-3">Let's Talk</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Contact;