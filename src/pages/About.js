import React, {Fragment} from 'react';

export const About = () =>{
    return(
        <Fragment>
            <div className="mt-5" id="projects">
                <h1>React coding challenge</h1> 
                <ul>
                    <li> Build a small single page app using ReactJS</li>
                    <li>The subject of the app is up to you.</li>
                    <li>Ensure you show the use of components</li>
                    <li>The app must have a navigation menu</li>
                    <li>The app must allow you to navigate between different pages</li>
                    <li>The app must have a form field eg. input type=text and perform some javascript validation i.e. check that the text is a string</li>    
                </ul>
            </div> 
        </Fragment> 
    )
}