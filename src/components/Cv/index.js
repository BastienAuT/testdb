import "./styles.scss";
import cv from "./cv.png";
import React from "react";
import CvItem from "./cvitem";

const Cv = () => (
  <div className="cv">
    <div className="cv__button">
      <CvItem />
    </div>

    <img className="cv__image" src={cv} alt="cvdebastien"></img>
  </div>
);

export default Cv;
