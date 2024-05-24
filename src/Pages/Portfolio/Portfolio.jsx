import React, { useState } from "react";
import Heading from "../../components/Heading/Heading";

import styles from "./Portfolio.module.css";
import img1 from "../../assets/poert1.png"
import img2 from "../../assets/port2.png"
import img3 from "../../assets/port3.png"

export default function Portfolio() {
  const [pop, setPop] = useState(false);
  const [src, setSrc] = useState(false);

  return (
    <>
      <div className="main-portfolio relative pt-10">
        <div className="portfolio pt-[90px]">
          <Heading color={"infobg"} head={"PORTFOLIO COMPONENT"} />

          <div
            className={`container ${styles.container} mx-auto my-6 overflow-hidden flex flex-wrap gap-12`}
          >
            <div
              className="portfolio-imgs w-[30%] relative cursor-pointer"
              onClick={(e) => {
                setPop(true);

                setSrc(img1);

              }}
            >
              <img
                src="../../../public/assessts/poert1.png"
                className="rounded"
                alt=""
              />
              <div className="overlay rounded ">
                <i class="fa-solid fa-plus text-[100px] text-white"></i>
              </div>
            </div>
            <div
              className="portfolio-imgs w-[30%] relative cursor-pointer"
              onClick={(e) => {
                setPop(true);
                setSrc(img2);
              }}
            >
              <img
                src="../../../public/assessts/port2.png"
                className="rounded"
                alt=""
              />
              <div className="overlay rounded">
                <i class="fa-solid fa-plus text-[100px] text-white"></i>
              </div>
            </div>
            <div
              className="portfolio-imgs w-[30%] relative cursor-pointer"
              onClick={(e) => {
                setPop(true);
                setSrc(img3);
              }}
            >
              <img
                src="../../../public/assessts/port3.png"
                className="rounded"
                alt=""
              />
              <div className="overlay rounded">
                <i class="fa-solid fa-plus text-[100px] text-white"></i>
              </div>
            </div>
            <div
              className="portfolio-imgs w-[30%] relative cursor-pointer"
              onClick={(e) => {
                setPop(true);
                setSrc(img1);
              }}
            >
              <img
                src="../../../public/assessts/poert1.png"
                className="rounded"
                alt=""
              />
              <div className="overlay rounded">
                <i class="fa-solid fa-plus text-[100px] text-white"></i>
              </div>
            </div>
            <div
              className="portfolio-imgs w-[30%] relative cursor-pointer"
              onClick={(e) => {
                setPop(true);
                setSrc(img2);
              }}
            >
              <img
                src="../../../public/assessts/port2.png"
                className="rounded"
                alt=""
              />
              <div className="overlay rounded">
                <i class="fa-solid fa-plus text-[100px] text-white"></i>
              </div>
            </div>
            <div
              className="portfolio-imgs w-[30%] relative cursor-pointer"
              onClick={(e) => {
                setPop(true);
                setSrc(img3);
              }}
            >
              <img
                src="../../../public/assessts/port3.png"
                className="rounded"
                alt=""
              />
              <div className="overlay rounded">
                <i class="fa-solid fa-plus text-[100px] text-white"></i>
              </div>
            </div>
          </div>
        </div>

        {pop === true ? (
          <div
            className={`popUp ${styles.popUp}`}
            onClick={(e) => {
              let popUpEle = document.querySelector(".popUp");
              if (e.target === popUpEle) {
                setPop(false);
              }
            }}
          >
            <div>
              <img src={src} className="w-[600px] fixed" alt="" />
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
}
