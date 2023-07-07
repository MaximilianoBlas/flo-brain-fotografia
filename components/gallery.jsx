import Image from "next/image";
import { useEffect, useState } from "react";

import {
  galeryContainer,
  h2,
  line,
  topDiv,
  bigPictureContainer,
  prevButton,
  nextButton,
  smallPictureContainer,
  miniPicSelect,
  selectedMiniPicSelect,
  verP,
  smallPicture,
} from "@/styles/_galery.module.scss";

import pic1 from "@/public/galerymedia/1.jpg";
import pic2 from "@/public/galerymedia/2.jpg";
import pic3 from "@/public/galerymedia/3.jpg";
import pic4 from "@/public/galerymedia/4.jpg";
import pic5 from "@/public/galerymedia/5.jpg";

export default function Gallery() {
  const galeryPics = [pic1, pic2, pic3, pic4, pic5];

  let [currentImage, setCurrentImage] = useState(0);

  function prevImage() {
    currentImage > 0 ? setCurrentImage(parseInt(currentImage) - 1) : setCurrentImage((currentImage = 4));
  }

  function nextImage() {
    currentImage < 4 ? setCurrentImage(parseInt(currentImage) + 1) : setCurrentImage((currentImage = 0));
  }

  function imageSelect(e) {
    setCurrentImage(parseInt(e.target.id));
  }

  return (
    <div className={galeryContainer}>
      <h2 className={h2}>Galería</h2>
      <div className={topDiv}>
        <button className={prevButton} onClick={prevImage}>
          {"<"}
        </button>
        <div className={bigPictureContainer}>{<Image src={galeryPics[currentImage]} fill={true} alt="Full size selected gallery image" />}</div>
        <button className={nextButton} onClick={nextImage}>
          {">"}
        </button>
      </div>
      <div className={smallPictureContainer}>
        {galeryPics.map((pic, index) => {
          return (
            <div key={index} id={index} className={index === currentImage ? selectedMiniPicSelect : miniPicSelect} onClick={imageSelect}>
              <p id={index} className={verP}>
                Ver
              </p>
              <div id={index} className={smallPicture}>
                <Image id={index} src={pic} fill={true} placeholder="blur" alt="Miniature gallery image" />
              </div>
            </div>
          );
        })}
      </div>
      <div className={line}></div>
    </div>
  );
}
