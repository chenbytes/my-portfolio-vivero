import React, { useEffect, useState } from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';
import profileImage from '../assets/images/profile.png';

const roles = [
  'Web Developer',
  'Administrative Support',
  'Data Entry Specialist',
  'Technical Support',
  'Quality Assurance',
];

function Main() {
  const [roleIndex, setRoleIndex] = useState<number>(0);
  const [charIndex, setCharIndex] = useState<number>(0);
  const [isDeleting, setIsDeleting] = useState<boolean>(false);

  const currentRole = roles[roleIndex];
  const typedRole = currentRole.slice(0, charIndex);

  useEffect(() => {
    const atRoleEnd = charIndex === currentRole.length;
    const atRoleStart = charIndex === 0;
    const delay = atRoleEnd && !isDeleting ? 1200 : isDeleting ? 45 : 90;

    const timer = window.setTimeout(() => {
      if (!isDeleting && atRoleEnd) {
        setIsDeleting(true);
        return;
      }

      if (isDeleting && atRoleStart) {
        setIsDeleting(false);
        setRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
        return;
      }

      setCharIndex((prevIndex) => (isDeleting ? prevIndex - 1 : prevIndex + 1));
    }, delay);

    return () => {
      window.clearTimeout(timer);
    };
  }, [charIndex, currentRole.length, isDeleting]);

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
              <img src={profileImage} alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/chenbytes" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/chyna-vivero-2b0005286/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Chyna Vivero</h1>
          <p>{typedRole}<span>|</span></p>

          <div className="mobile_social_icons">
            <a href="https://github.com/chenbytes" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/chyna-vivero-2b0005286/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;