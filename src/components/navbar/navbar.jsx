import React, { useEffect, useState } from "react";
import { navlinks } from '../../data/navlinks'
import { RiMoonClearLine } from 'react-icons/ri';
import { RiSunLine } from 'react-icons/ri'
import { IconContext } from "react-icons";

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [reachedPosition, setReachedPosition] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const isVisible = prevScrollPos > currentScrollPos;
      const hasReachedPosition = currentScrollPos;

      setPrevScrollPos(currentScrollPos);
      setVisible(isVisible);
      setReachedPosition(hasReachedPosition);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  const closeNavbar = () => {
    if (navbarOpen) {
      setNavbarOpen(false);
    }
  };

  const navbarStyle = {
    transform: visible ? "translateY(0)" : "translateY(-100%)",
    transition: "transform 0.3s ease-in-out",
    borderBottom: reachedPosition ? "1px solid Gainsboro" : "none",
  };

  const [theme, setTheme] = useState(null);

useEffect (() => {
  if(window.matchMedia('(prefers-color-scheme: dark)').matches) {
    setTheme('dark');
  }
  else {
    setTheme('light');
  }
}, [])

useEffect(() => {
  if(theme === "dark") {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
}, [theme]);

const handleThemeSwitch = () => {
  setTheme(theme === "dark" ? "light" : "dark")
};

  return (
    <>
      <nav
        className="fixed flex flex-wrap justify-between py-2 bg-teal-50 mb-3 lg:opacity-95 border-b w-full z-20 dark:bg-neutral-900"
        style={navbarStyle}
      >
        <div className="container px-4 lg:px-20 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
          <div data-aos="fade-down"
               data-aos-anchor-placement="top-bottom"
               data-aos-duration="1000">
            <a 
              className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap text-slate-700 fontPrimary dark:text-slate-50"
              href="#home"
            >
              @charlesgonzales
            </a>
            </div>
            <div data-aos="fade-down"
               data-aos-anchor-placement="top-bottom"
               data-aos-duration="1400">
            <input
              className="hidden"
              type="checkbox"
              id="checkbox"
              checked={navbarOpen}
              onChange={() => setNavbarOpen(!navbarOpen)}
            />
            <label
              htmlFor="checkbox"
              className="toggle lg:hidden relative w-10 h-10 cursor-pointer flex flex-col items-center justify-center gap-1 duration-[.5s]"
            >
              <div className="bars h-1 bg-slate-700 rounded w-[70%] dark:bg-slate-500" id="bar1"></div>
              <div className="bars w-full h-1 bg-slate-700 rounded duration-[.8s] dark:bg-slate-500" id="bar2"></div>
              <div className="bars h-1 bg-slate-700 rounded w-[70%] dark:bg-slate-500" id="bar3"></div>
            </label>
            </div>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center lg:justify-end lg:flex-row flex-col mt-36 lg:mt-0 gap-y-7 lg:gap-0" +
              (navbarOpen ? " flex h-[100vh]" : " hidden")
            }
            id="example-navbar-danger"
          >
            {navlinks
              .filter((navlink) => navlink.nav)
              .map((nav_links) => (
                <div key={nav_links.id}>
                  <ul className="flex lg:py-3 w-full lg:w-auto lg:ml-auto lg:pt-5 fontSecondary lg:fontPrimary">
                    <li className="nav-item">
                    <div data-aos="fade-down"
                         data-aos-anchor-placement="top-bottom"
                         data-aos-duration={nav_links.duration}>
                      <a
                        className="px-3 flex justify-center text-slate-700 font-bold hover:opacity-75 dark:text-slate-50"
                        href={nav_links.link}
                        onClick={closeNavbar}
                      >
                        <span className="ml-2 text-3xl lg:text-sm lg:font-bold font-extrabold">
                          {nav_links.name}
                        </span>
                      </a>
                      </div>
                    </li>
                  </ul>
                </div>
              ))}
              <div className="mt-3 ml-5"
               data-aos="fade-down"
               data-aos-anchor-placement="top-bottom"
               data-aos-duration="2050">
                <button id="toggleDark" onClick={handleThemeSwitch}>
                {theme === "dark" ?   <IconContext.Provider value={{ color: '#f8fafc', size: '23px' }}><RiSunLine /></IconContext.Provider>
                :  <IconContext.Provider value={{ color: '#334155', size: '23px' }}><RiMoonClearLine /> </IconContext.Provider>}
             
            </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}