import '../App.css';
import CVpdf from '../Docs/cvtex.pdf';

//Commented out for Netlify
import { useState } from 'react';


export const Navbar = () => {
    const [clickState, setClickState] = useState([1, 0, 0, 0]);
    const elementClassLookupArray = ["headerBarMenuElement", "headerBarMenuElementBold"];
    //Commented out for Netlify
    // const [navHover, setNavHover] = useState(false);
    // const [homeClicked, setHomeClicked] = useState(false);
    // const [skillsClicked, setSkillsClicked] = useState(false);
    // const [experienceClicked, setExperienceClicked] = useState(false);

    // <p className = "rightMenuElement" onMouseOver = {() => {setLinkedinHover(1)}} onMouseOut = {() => {setLinkedinHover(0)}}><a href="https://www.linkedin.com/in/charlotte-megroff-88aa17176/"><img src={logoLookup["linkedin"][linkedinHover]} alt="LinkedIn"/>LinkedIn</a></p>

    const boldHandler = (elementIndex) => {
        let newArray = [0, 0, 0, 0];
        newArray[elementIndex] = 1;
        setClickState(newArray);
    }

    return (
            <div className = "headerBar150px" id = "headAll">

                <div className = "headerBarMenu">
                    <div className = "headerBarMenuInner1">

                            <div className = "headerBarTitleText">Charlotte Megroff</div>

                    </div>
                    <div className = "headerBarMenuInner2">
                        <div onClick = {() => {boldHandler(0)}} className = {elementClassLookupArray[clickState[0]]}>Home</div>
                        <div>•</div>
                        <a href={CVpdf}><div className = {elementClassLookupArray[clickState[1]]}>CV</div></a>
                        <div>•</div>
                        <div onClick = {() => {boldHandler(2)}} className = {elementClassLookupArray[clickState[2]]}>Skills</div>
                        <div>•</div>
                        <div onClick = {() => {boldHandler(3)}} className = {elementClassLookupArray[clickState[3]]}>Experience</div>
                        {/* this needs to migrate when page narrow */}
                    </div>
                </div>
            </div>
    )
}
