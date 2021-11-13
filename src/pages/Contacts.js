import React, {Fragment} from 'react';

export const Contacts = () => {

    const validateEmail = (email) =>{
        const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
      }
    const validatePassword = (password) =>
      {
        // at least one number, one lowercase and one uppercase letter
        // at least six characters
        var re = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
        return re.test(password);
      }
      
     
        
    const handleClick = () =>{
     /*  let submitBtn = document.querySelector('#SubmitBtn');*/
        let username = document.querySelector('#username');
        let email = document.querySelector('#email');
        let password = document.querySelector('#password');
        let error = document.querySelector('#error');
    
        error.innerHTML = password.value;
            if (username.value.length<6 || username.value.length>20){
                error.innerHTML = 'username should be min 6 and max 20 symbols' ;
            }
            else if(!validateEmail(email.value)){
                error.innerHTML = 'Please enter a valid email address'
            }
            else if(!validatePassword(password.value)){
                error.innerHTML = 'Password should contain at least one number,<br/> one lowercase and one uppercase letter, <br/>and at least six characters'
            }

       
            console.log(username.value.length);
            console.log(email.value);
            console.log(password.value);

            console.log(validateEmail(email.value));
            console.log(validatePassword(password.value));
    }
   
  
 
    return(
        <Fragment>
            <div className="mt-5" id="contact">
                <h2>Contacts</h2><br/>
                <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                            <form action="" method="post" >
                                <label for="username">User name</label>
                                <input type="text" name="username" id="username" class="form-control" required />
                                <label for="email">Email</label>
                                <input type="email" name="email" id="email" class="form-control" required />
                                <label for="password">Password</label>
                                <input type="password" name="password" id="password" class="form-control" required/>
                                <label for="email">Message</label>
                                <textarea name="mess" id="mess" class="form-control" spellcheck="false"></textarea>
                                <br/>
                                <div id="error"></div>
                                <button type="button" id="SubmitBtn" class="btn btn-info mt-3" onClick={handleClick}>Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div> 

        </Fragment>
    )
}