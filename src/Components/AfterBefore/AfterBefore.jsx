// eslint-disable-next-line no-unused-vars
import React from "react";
import CssHome from "../AfterBefore/AfterBefore.module.css";

// eslint-disable-next-line react/prop-types
export default function AfterBefore({ title }) {
  return (
    <div className="pt-2 text-center text-black ">
      <h2 className={`${CssHome.test}`}>{title}</h2>
      <i className="fas fa-star text-center text-xl"></i>
    </div>
  );
}
