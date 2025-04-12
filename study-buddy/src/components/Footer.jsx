import React from 'react';
import '../styles/style.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="text">
        <span>
          Built by NMSU CS Students |{' '}
          <a
            href="https://github.com/Stonebraker39/study-buddy"
            target="_blank"
            rel="noreferrer"
          >
            View Project on GitHub
          </a>{' '}
          | © {new Date().getFullYear()} Study Buddy
        </span>
      </div>
    </footer>
  );
};

export default Footer;
