import React from "react";

type SocialLinksProps = {
  github: string;
  linkedin: string;
  discord: string; // invite link or profile link
};

const Redes: React.FC<SocialLinksProps> = ({ github, linkedin, discord }) => {
  return (
    <div className="social-links">
      <a
        href={github}
        target="_blank"
        rel="noopener noreferrer"
        className="btn social-btn social-github"
        title="GitHub"
      >
        <i className="fa-brands fa-github"></i>
        <span>GitHub</span>
      </a>
      <a
        href={linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="btn social-btn social-linkedin"
        title="LinkedIn"
      >
        <i className="fa-brands fa-linkedin"></i>
        <span>LinkedIn</span>
      </a>
      <a
        href={discord}
        target="_blank"
        rel="noopener noreferrer"
        className="btn social-btn social-discord"
        title="Discord"
      >
        <i className="fa-brands fa-discord"></i>
        <span>Discord</span>
      </a>
    </div>
  );
};

export default Redes;
