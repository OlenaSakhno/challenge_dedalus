import React, {Fragment} from 'react';

export const Contacts = () => {

    const validateEmail = (email) =>{
        const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
      }
    const validatePassword = (password) =>
      {
        // at least one number, one lowercase and one uppercase letter,  at least six characters
        var re = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
        return re.test(password);
      }
      
     
        
    const handleClick = () =>{
     /*  let submitBtn = document.querySelector('#SubmitBtn');*/
        let username = document.querySelector('#username');
        let email = document.querySelector('#email');
        let password = document.querySelector('#password');
        let error = document.querySelector('#error');
        let message = document.querySelector('#mess');
        error.innerHTML = '';
    
        error.innerHTML = password.value;
            if (username.value.length<6 || username.value.length>20){
                error.innerHTML = 'Username must be at least 6 and maximum 20 characters long' ;
            }
            else if(!validateEmail(email.value)){
                error.innerHTML = 'Please enter a valid email address'
            }
            else if(!validatePassword(password.value)){
                error.innerHTML = 'Password must be at least one number,<br/> one lowercase and one uppercase letter, <br/>and at least six characters'
            }
            else if(message.value.length < 10 || message.value.length > 250){
                error.innerHTML = 'Message must be min 10 and max 250 characters'
            }
            else error.innerHTML = '';
    }
    return(
        <Fragment>
            <div className="mt-5" id="contact">
                <h2>Contact</h2><br/>
                <div className="container">
                    <div className="row">
                        
                            <form  >
                                <div className="mb-3">
                                    <label for="username" className="form-label">User name <span>*</span></label>
                                    <input type="text" name="username" id="username" className="form-control" required />
                                </div>
                                <div className="mb-3">
                                    <label for="email">Email<span>*</span></label>
                                    <input type="email" name="email" id="email" className="form-control" required />
                                </div>
                                <div className="mb-3">
                                <label for="password">Password<span>*</span></label>
                                <input type="password" name="password" id="password" className="form-control" required/>
                                </div>
                                <div className="mb-3">
                                    <label for="email">Message<span>*</span></label>
                                    <textarea name="mess" id="mess" className="form-control" spellcheck="false" required minLength ></textarea>
                                </div>
                                <br/>
                                <div id="error"></div>
                                <button type="button" id="SubmitBtn" className="btn btn-info mt-3" onClick={handleClick}>Submit</button>
                            </form>
                        
                    </div>
                </div>
            </div> 

        </Fragment>
    )
}