import React from "react";
import "./Gallery.css";
import firstImage from "../../utils/gallery_images/100.jpg";
import secondImage from "../../utils/gallery_images/101.jpg";
import thirdImage from "../../utils/gallery_images/102.jpg";
import fourthImage from "../../utils/gallery_images/103.jpg";
import fifthImage from "../../utils/gallery_images/104.jpg";
import sixthImage from "../../utils/gallery_images/105.jpg";
import seventhImage from "../../utils/gallery_images/106.jpg";
import eighthImage from "../../utils/gallery_images/107.jpg";
import ninethImage from "../../utils/gallery_images/108.jpg";
import tenthImage from "../../utils/gallery_images/109.jpg";
import eleventhImage from "../../utils/gallery_images/110.jpg";
import twelvethImage from "../../utils/gallery_images/111.jpg";
import thirteenthImage from "../../utils/gallery_images/112.jpg";
import fourteenthImage from "../../utils/gallery_images/113.jpg";
import fifteenthImage from "../../utils/gallery_images/114.jpg";
import sixteenthImage from "../../utils/gallery_images/115.jpg";
import seventeenthImage from "../../utils/gallery_images/116.jpg";
// import eighteenthImage from "../../utils/gallery_images/117.jpg";
// import nineteenthImage from "../../utils/gallery_images/118.jpg";


function Gallery() {
  return (
    <div className="gallery-content">
      <h2>Gallery</h2>
      <div class="grid-wrapper">
        <div>
          <img src={firstImage} alt="" />
        </div>
        <div>
          <img src={secondImage} alt="" />
        </div>
        <div>
          <img src={ thirdImage } alt="" />
        </div>
        <div>
          <img src={ fourthImage } alt="" />
        </div>
        <div>
          <img src={fifthImage} alt="" />
        </div>
        <div>
        <img src={sixthImage} alt="" />
        </div>
        <div>
          <img src={seventhImage} alt="" />
        </div>
        <div>
          <img src={eighthImage} alt="" />
        </div>
        <div>
          <img src={ninethImage} alt="" />
        </div>
        <div>
          <img src={tenthImage} alt="" />
        </div>
        <div>
          <img src={eleventhImage} alt="" />
        </div>
        <div>
          <img src={twelvethImage} alt="" />
        </div>
        <div>
          <img src={thirteenthImage} alt="" />
        </div>
        <div>
          <img src={fourteenthImage} alt="" />
        </div>
        <div>
          <img src={fifteenthImage} alt="" />
        </div>
        <div>
          <img src={sixteenthImage} alt="" />
        </div>
        <div>
          <img src={seventeenthImage} alt="" />
        </div>
        {/* <div>
          <img src={eighteenthImage} alt="" />
        </div>
        <div>
          <img src={nineteenthImage} alt="" />
        </div> */}
      </div>
    </div>
  );
}

export default Gallery;
