import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer>
      <div>
        <a href="https://github.com/Mirandaelton833" target="_blank" rel="noreferrer"><GitHubIcon/></a>
        <a href="https://www.linkedin.com/in/eltonmirandaengineering/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
      </div>
      <p>© Elton Miranda, 2025</p>
    </footer>
  );
}

export default Footer;