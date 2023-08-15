import { GiHamburgerMenu } from "react-icons/gi";
import { CgClose } from "react-icons/cg";
import React, { useEffect, useState } from "react";

function Navbar() {
  const [navbarVisible, setNavbarVisible] = useState(false);
  const [responsiveNavVisible, setResponsiveNavVisible] = useState(false);
  const sectionLinks = [
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    {
      name: "Contact",
      link: "#contact",
    },
  ];

  useEffect(() => {
    const links = document.querySelectorAll(".nav-items-list-item-link");
    links.forEach((link) => {
      link.addEventListener("click", () => setResponsiveNavVisible(false));
    });
    const nav = document.querySelector(".nav-items");
    nav?.addEventListener("click", (e) => {
      e.stopPropagation();
    });
    const html = document.querySelector("html");
    html?.addEventListener("click", (e) => {
      setResponsiveNavVisible(false);
    });
  }, []);

  useEffect(() => {
    const main = document.querySelector("main");
    if (responsiveNavVisible) {
      main?.classList.add("blur");
    } else {
      main?.classList.remove("blur");
    }
  }, [responsiveNavVisible]);

  return (
    <nav>
      <div className={`wrapper ${navbarVisible ? "blur-nav" : ""}`}>
        <div className="brand"></div>
        <div className="nav-responsive-toggle">
          {responsiveNavVisible ? (
            <CgClose
              onClick={(e: { stopPropagation: () => void }) => {
                e.stopPropagation();
                setResponsiveNavVisible(false);
              }}
            />
          ) : (
            <GiHamburgerMenu
              onClick={(e: { stopPropagation: () => void }) => {
                e.stopPropagation();
                setResponsiveNavVisible(true);
              }}
            />
          )}
        </div>
        <div className={`${responsiveNavVisible && "nav-responsive"} nav-items`}>
          <ul className="nav-items-list">
            {sectionLinks.map(({ name, link }, index) => (
              <li key={name} className="nav-items-list-item">
                <a href={link} className="nav-items-list-item-link">
                  {name}
                </a>
              </li>
            ))}
          </ul>
          <div className="nav-items-button"></div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
