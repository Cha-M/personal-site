import '../App.css';
import emailLogo from '../Images/email-0.svg';
import emailLogoGrey from '../Images/email-0-grey.svg';
import githubLogo from '../Images/github.svg';
import githubLogoGrey from '../Images/github-grey.svg';
import slackLogo from '../Images/slack.svg';
import slackLogoGrey from '../Images/slack-grey.svg';
import linkedinLogo from '../Images/linkedin.svg';
import linkedinLogoGrey from '../Images/linkedin-grey.svg';
import { useState } from 'react';

const logoLookup = {    "linkedin": [linkedinLogo, linkedinLogoGrey],
                        "github": [githubLogo, githubLogoGrey],
                        "slack": [slackLogo, slackLogoGrey],
                        "email": [emailLogo, emailLogoGrey],
};

export const MenuRight = () => {
    const [linkedinHover, setLinkedinHover] = useState(0);
    const [githubHover, setGithubHover] = useState(0);
    const [emailHover, setEmailHover] = useState(0);
    const [slackHover, setSlackHover] = useState(0);

    return (
        <div className = "rightMenu">
            <div className = "rightMenuInner">
                
                <p className = "rightMenuElement" onMouseOver = {() => {setLinkedinHover(1)}} onMouseOut = {() => {setLinkedinHover(0)}}><a href="https://www.linkedin.com/in/charlotte-megroff-88aa17176/"><img src={logoLookup["linkedin"][linkedinHover]} alt="LinkedIn"/>LinkedIn</a></p>
                <p className = "rightMenuElement" onMouseOver = {() => {setGithubHover(1)}} onMouseOut = {() => {setGithubHover(0)}}><a href="https://github.com/Cha-M"><img src={logoLookup["github"][githubHover]} alt="GitHub"/>GitHub</a></p>
                <p className = "rightMenuElement" onMouseOver = {() => {setSlackHover(1)}} onMouseOut = {() => {setSlackHover(0)}}><a href="https://join.slack.com/t/cha-mdevelopment/shared_invite/zt-19jy7dkow-by~46EPqbBWlPDZ5UdFl4w"><img src={logoLookup["slack"][slackHover]} alt="Slack"/>Slack</a></p>
                <p className = "rightMenuElement" onMouseOver = {() => {setEmailHover(1)}} onMouseOut = {() => {setEmailHover(0)}}><a href="mailto://charlotte.megroff@outlook.com"><img src={logoLookup["email"][emailHover]} alt="Email"/>Email</a></p>

            </div>
        </div>
    )
}