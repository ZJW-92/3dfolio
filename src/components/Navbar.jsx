import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import pdf from "/CV_Zhijie.pdf"
import { styles } from "../styles";
import { navLinks } from "../constants";
import { zjw_logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-5 fixed top-0 z-20 ${
        scrolled ? "bg-primary" : "bg-transparent"
      }`}
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link
          to='/'
          className='flex items-center gap-2'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={zjw_logo} alt='logo' className='w-24 h-14 object-contain' />
          <p className='text-secondary hover:text-white text-[18px] font-medium cursor-pointer flex '>
           Chi Kit 🇭🇰🇲🇴&nbsp;
            <span className='sm:block hidden'> | Zhi Jie 🇨🇳</span>
          </p>
        </Link>
        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
          {/*
          <Link to="/CV_Zhijie.pdf" className='flex items-center gap-2'
          onClick={() => {
            setActive("");
            window.open(pdf);
          }}
      
        >
            </Link>
          */}
           
          {/*
          <p className='text-secondary hover:text-white text-[18px] font-medium cursor-pointer flex '>
            Resume &nbsp;
             <span className='sm:block hidden'> | CV</span> 
          </p>
          */}
          
         {/*move </Link> after line 78 p tag for showing resume ! */}
        </ul>

        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img
            src={toggle ? close : menu}
            alt='menu'
            className='w-[28px] h-[28px] object-contain'
            onClick={() => setToggle(!toggle)}
          />
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? "text-white" : "text-secondary"
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
              {/*
              <Link className='flex items-center gap-2'
             onClick={() => {
            setActive("");
            window.open(pdf);
          }}
        >
           </Link>
        */}

          {/*
          <p className='text-secondary hover:text-white text-[18px] font-medium cursor-pointer flex '>
            Resume &nbsp;
           <span className='sm:block hidden'> | CV</span> 
          </p>
          */}
          {/*move line 128 after line 125 p tag for showing resume */}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
