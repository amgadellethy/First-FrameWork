import React from "react";
import styles from "./Heading.module.css";

export default function Heading({ color, head }) {
  return (
    <>
      <h2 className={`text-center text-4xl font-bold  mb-3 text-${color}`}>
        {head}
      </h2>
      <div
        className={`star ${styles.star}  text-center relative text-${color} before:bg-${color} after:bg-${color}`}
      >
        <i class="fa-solid fa-star"></i>
      </div>
    </>
  );
}
