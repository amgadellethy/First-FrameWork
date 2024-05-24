import React from "react";
import Heading from "../../components/Heading/Heading";
import Navbar from "../../components/Navbar/Navbar";
import Info from "../../components/Info/Info";
import Footer from "../../components/Footer/Footer";

import styles from "./Contact.module.css"

export default function Contact() {
  return (
    <>
      
      <div className={`contact ${styles.contact} pt-[120px]`}>
        <div className="container mx-auto">
          <Heading color={"infobg"} head={"CONTACT SECTION"}/>

          <div className=" text-center my-[90px]">
            <div className="user mb-9 relative  ">
              
              <input
                type="text"
                placeholder="userName"
                className="w-1/2 py-2 outline-none z-50"
              />
              <div htmlFor="" className="text-homebg label text-start w-1/2 ps-4 mb-2  absolute ">userName :</div>
            </div>
            <div className="user mb-9 relative ">

              <input
                type="number"
                placeholder="userAge"
                className="w-1/2 py-2 outline-none z-50"
              />
              <div htmlFor="" className="text-homebg label  text-start w-1/2 ps-4 mb-2  absolute">userAge :</div>

            </div>
            <div className="user mb-9 relative ">

              <input
                type="email"
                placeholder="userEmail"
                className="w-1/2 py-2 outline-none z-50"
              />
                          <div htmlFor="" className="text-homebg label  text-start w-1/2 ps-4 mb-2  absolute">userEmail :</div>

            </div>
            <div className="user mb-9 relative ">

              <input
                type="password"
                placeholder="userPassword"
                className="w-1/2 py-2 outline-none z-50"
              />
              <div htmlFor="" className="text-homebg  label   text-start w-1/2 ps-4 mb-2  absolute">userPassword :</div>

            </div>
            <div className="button-container w-1/2 mx-auto text-start ">
              <button className="bg-homebg text-white py-2 px-4 rounded mt-3 ">
                send Message
              </button>
            </div>
          </div>
        </div>
      </div>
     
    </>
  );
}
