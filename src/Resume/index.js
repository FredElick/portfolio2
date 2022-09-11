import React from "react";
import resPdf from "../assets/pdf/resume.pdf";
function Resume(){
    return(
        <div>
            <a href={resPdf} >
                Download Resume
            </a>
            <h1>
                Front End Proficiencies
            </h1>
            <ul>
                <li>HTML</li>
                <li>css</li>
                <li>JavaScript</li>
                <li>JQuery</li>
                <li>Responsive Design</li>
                <li>React</li>
                <li>bootstrap</li>
            </ul>
            <h1>
                Back End Proficiencies
            </h1>
            <ul>
                <li>APIs</li>
                <li>Node</li>
                <li>Express</li>
                <li>MySQL</li>
                <li>MongoDB</li>
            </ul>
        </div>
    )
}

export default Resume;