import React from 'react';

const Footer = () => (
  <footer className="footer">
    <div className="logo">
      <a href="/">
        <svg className="bi" width="30" height="24"><use xlinkHref="#bootstrap" /></svg>
      </a>
      <span className="text">&copy; MY SHOP</span>
    </div>
    <ul className="socialIcons">
      <li><a href="#"><svg className="bi" width="24" height="24"><use xlinkHref="#twitter" /></svg></a></li>
      <li><a href="#"><svg className="bi" width="24" height="24"><use xlinkHref="#instagram" /></svg></a></li>
      <li><a href="#"><svg className="bi" width="24" height="24"><use xlinkHref="#facebook" /></svg></a></li>
    </ul>
  </footer>
);

export default Footer;
