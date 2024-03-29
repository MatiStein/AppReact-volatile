import emailjs from "emailjs-com";
import React from 'react';

export default function Support() {

    function SendEmail(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const form = e.target as HTMLFormElement;
        const Name = form.elements.namedItem("name") as HTMLInputElement;
        const email = form.elements.namedItem("email") as HTMLInputElement;
        const Subject = form.elements.namedItem("subject") as HTMLInputElement;
        const Message = form.elements.namedItem("message") as HTMLTextAreaElement;

        emailjs.sendForm('service_rynqrmq', 'template_ejceal7', form, '9ANcvcju7Lm765Kyg')
            .then((response) => {
                console.log('Email successfully sent!');
            })
            .catch((error) => {
                console.error('An error occurred:', error);
            });
        form.reset()
    }


    return (
        <div>
            <div className="container">
                <form onSubmit={SendEmail} action="#">
                    <div className="row pt-5 mx-auto">
                        <div className="col-8 form-group mx-auto">
                            <input type="text" className="form-control" placeholder="Name" name="name" />
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <input type="email" className="form-control" placeholder="Email Address" name="email" />
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <input type="text" className="form-control" placeholder="Subject" name="subject" />
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <textarea className="form-control" id="" cols={30} rows={8} placeholder="Your message" name="message"></textarea>
                        </div>
                        <div className="col-8 pt-3 mx-auto">
                            <input type="submit" className="btn btn-info" value="Send Message"></input>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}