import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  let [padd, setPadd] = useState(5);

  // console.log(padd);

  window.addEventListener("scroll", scrollFunction);

  function scrollFunction() {
    if (
      (document.body.scrollTop = 0 || document.documentElement.scrollTop > 0)
    ) {
      setPadd(10)
    } else {
setPadd(5)      
    }
  }

  return (
    <>
      <nav className={`text-white nav ${styles.nav} ${(padd == 5) ? styles.padd5 : styles.padd10}`}>
        <div className="container  mx-auto ">
          <div className="flex justify-between items-center ">
            <h1 className="font-bold text-3xl cursor-pointer ">
              <NavLink to="">START FRAMEWORK</NavLink>
            </h1>
            <ul className="nav-menu items-center gap-5 font-bold">
              <li className="cursor-pointer ">
                <NavLink
                  to="About"
                  className={({ isActive }) =>
                    isActive ? "bg-homebg py-2 px-4 rounded" : ""
                  }
                >
                  ABOUT
                </NavLink>
              </li>
              <li className="cursor-pointer">
                <NavLink
                  to="Portfolio"
                  className={({ isActive }) =>
                    isActive ? "bg-homebg py-2 px-4 rounded" : ""
                  }
                >
                  PORTFOLIO
                </NavLink>
              </li>
              <li className="cursor-pointer">
                <NavLink
                  to="Contact"
                  className={({ isActive }) =>
                    isActive ? "bg-homebg py-2 px-4 rounded" : ""
                  }
                >
                  CONTACT
                </NavLink>
              </li>
            </ul>
            <div className="icon-menu cursor-pointer">
              <i class="fa-solid fa-bars"></i>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
