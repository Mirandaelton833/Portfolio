import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src="https://i.imgur.com/Soi7fJL.jpeg" alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/Mirandaelton833" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/eltonmirandaengineering/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Elton Miranda</h1>
          <p>Final Year Chemical Engineering Student</p>
          <p>Project Manager / ICT Business Analyst</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/Mirandaelton833" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/eltonmirandaengineering/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;