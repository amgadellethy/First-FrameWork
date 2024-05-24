import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Info from "../../components/Info/Info";
import Footer from "../../components/Footer/Footer";
import Heading from "../../components/Heading/Heading";

export default function About() {
  return (
    <>
      

      <div className="home bg-homebg min-h-[90vh] flex justify-center items-center">
        <div className="container mx-auto flex flex-col justify-center items-center gap-3">
          <Heading color={"white"} head={"ABOUT COMPONENT"} />

          <div className="text-content flex justify-between items-center gap-5 px-14">
            <div className="inner ">
              <p className="text-white ">
                Freelancer is a free bootstrap theme created by Route. The
                download includes the complete source files including HTML, CSS,
                and JavaScript as well as optional SASS stylesheets for easy
                customization.
              </p>
            </div>
            <div className="inner ">
              <p className="text-white  ">
                Freelancer is a free bootstrap theme created by Route. The
                download includes the complete source files including HTML, CSS,
                and JavaScript as well as optional SASS stylesheets for easy
                customization.
              </p>
            </div>
          </div>
        </div>
      </div>

      
    </>
  );
}
