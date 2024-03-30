import React, { useEffect, useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import menu_icon from "../../assets/menu-icon.png";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  // let menuRef = useRef();

  // const handler = () => {
  //   setMobileMenu(false);
  // };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    });
  }, []);
  const [mobileMenu, setMobileMenu] = useState(false);
  const toggleMenu = () => {
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
  };
  useEffect(() => {
    const handler = () => {
      setMobileMenu(false);
    };
    document.addEventListener("mousedown", handler);
  }, []);

  return (
    <nav className={`container ${sticky ? "dark-nav" : ""}`}>
      <img src={logo} alt="" className="logo" />
      <img src={menu_icon} alt="" className="menu-icon" onClick={toggleMenu} />
      <ul className={mobileMenu ? " " : "hide-mobile-menu"}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/programpage">Program</Link>
        </li>
        <li>
          <Link to="/aboutpage">About</Link>
        </li>
        <li>
          <Link to="/Campuspage">Campus</Link>
        </li>
        <li>
          <Link to="/Testimonialspage">Testimonials</Link>
        </li>
        <li>
          <button className="btn">
            <Link to="/contactpage">Contact us</Link>
          </button>
        </li>
      </ul>
      {/* <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/programpage">Program</Link>
        </li>
        <li>
          <Link to="/aboutpage">About</Link>
        </li>
        <li>
          <Link to="/Campuspage">Campus</Link>
        </li>
        <li>
          <Link to="/Testimonialspage">Testimonials</Link>
        </li>
        <li>
          <button className="btn">
            <Link to="/contactpage">Contact us</Link>
          </button>
        </li>
      </ul> */}
    </nav>
  );
};

export default Navbar;
