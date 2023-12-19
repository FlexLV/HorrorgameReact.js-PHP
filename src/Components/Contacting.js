
import React from "react";
import "./Contacting.css"

function Contacting(){

    return(
            <div className='contact-form-container'>
                <div className='contact-form'>
                    <h1>Contact Us</h1>
                    <form>
                    <div>
                        <label for="email">Enter your email</label>
                        <input type='email' placeholder='Enter your email' />
                    </div>
                    <div>
                        <label for="text">Enter text you want to send us</label>
                        <input type='text' placeholder='Enter your text' />
                    </div>
                        <input className="submit_button" type="submit" value="Send Email" />
                    </form>
                </div>
            </div>
)
}
export default Contacting;


