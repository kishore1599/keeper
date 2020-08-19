import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <i className="fa fa-twitter fas" aria-hidden="true"></i>
      <i className="fa fa-facebook fas" aria-hidden="true"></i>
      <i className="fa fa-instagram fas" aria-hidden="true"></i>
      <i className="fa fa-envelope fas" aria-hidden="true"></i>
      <p className="para">Copyright ⓒ {year}</p>
    </footer>
  );
}

export default Footer;
