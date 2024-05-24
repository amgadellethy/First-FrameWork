import React from "react";
import Heading from "../../components/Heading/Heading";
import img1 from "../../assets/avataaars (1).svg";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Info from "../../components/Info/Info";

export default function Home() {
  return (
    <>
      <div className="home bg-homebg pt-[100px]">
        <div className=" h-[80vh]  text-center ">
          <img src={img1} className="w-[250px] mx-auto mb-9" alt="" />

          <Heading color={"white"} head={"START FRAMEWORK"} />
          <p className="text-white font-semibold mt-5">
            Graphic Artist - Web Designer - Illustrator
          </p>
        </div>
      </div>
    </>
  );
}
