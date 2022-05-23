import '../App.css';
import CVpdf from '../Docs/cvtex.pdf';
import { useState } from 'react';

export const Navbar = () => {
    //Commented out for Netlify
    // const [navHover, setNavHover] = useState(false);
    // const [homeClicked, setHomeClicked] = useState(false);
    // const [skillsClicked, setSkillsClicked] = useState(false);
    // const [experienceClicked, setExperienceClicked] = useState(false);

    return (
            <div className = "headerBar150px" id = "headAll">

                <div className = "headerBarMenu">
                    <div className = "headerBarMenuInner1">

                            <div className = "headerBarTitleText">Charlotte Megroff</div>

                    </div>
                    <div className = "headerBarMenuInner2">
                        <div className = "headerBarMenuElement">Home</div>
                        <div>•</div>
                        <a href={CVpdf}><div className = "headerBarMenuElement">CV</div></a>
                        <div>•</div>
                        <div className = "headerBarMenuElement">Skills</div>
                        <div>•</div>
                        <div className = "headerBarMenuElement">Experience</div>
                        {/* this needs to migrate when page narrow */}
                    </div>
                </div>
            </div>
    )
}