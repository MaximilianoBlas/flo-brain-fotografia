import Image from "next/image";
import { useEffect, useState } from "react";

import {
  galeryContainer,
  h2,
  line,
  topDiv,
  bigPictureContainer,
  prevButton,
  galleryLeftButtonArrow,
  nextButton,
  galleryRightButtonArrow,
  enlargePicButton,
  fullscreenIconDivTL,
  fullscreenIconDivTR,
  fullscreenIconDivBR,
  fullscreenIconDivBL,
  smallPictureContainer,
  miniPicSelect,
  selectedMiniPicSelect,
  verP,
  smallPicture,
  enlargedPicContainer,
  closeEnlargedPicButton,
  closeEnlargedPicButtonLinesR,
  closeEnlargedPicButtonLinesL,
} from "@/styles/_galery.module.scss";

// import pic1 from "@/public/galerymedia/1.jpg";
// import pic2 from "@/public/galerymedia/2.jpg";
// import pic3 from "@/public/galerymedia/3.jpg";
// import pic4 from "@/public/galerymedia/4.jpg";
// import pic5 from "@/public/galerymedia/5.jpg";

import galleryImages from "@/utils/galleryImports";

export default function Gallery() {
  // const galeryPics = [pic1, pic2, pic3, pic4, pic5];

  let [currentImage, setCurrentImage] = useState(0);
  let [enlargedImage, setEnlargedImage] = useState(false);

  function prevImage() {
    currentImage > 0 ? setCurrentImage(parseInt(currentImage) - 1) : setCurrentImage((currentImage = 43));
  }

  function nextImage() {
    currentImage < 43 ? setCurrentImage(parseInt(currentImage) + 1) : setCurrentImage((currentImage = 0));
  }

  function imageSelect(e) {
    setCurrentImage(parseInt(e.target.id));
  }

  function enlargeImageHandler() {
    console.log("soy enlargedImageHandler");
    setEnlargedImage(!enlargedImage);
  }

  useEffect(() => {
    console.log(currentImage);
  }, [currentImage]);

  return (
    <div className={galeryContainer}>
      {enlargedImage && (
        <div
          // style={{ height: "100vh", width: "100vw", position: "fixed", top: 0, left: 0, backgroundColor: "rgba(0, 0, 0, 0.8)", zIndex: 100 }}
          className={enlargedPicContainer}
        >
          <Image fill sizes="100vw" style={{ maxHeight: "100%", objectFit: "scale-down", opacity: 1 }} src={galleryImages[currentImage]} alt="Enlarged gallery image" />
          <button className={closeEnlargedPicButton} onClick={enlargeImageHandler}>
            <div className={closeEnlargedPicButtonLinesL}></div>
            <div className={closeEnlargedPicButtonLinesR}></div>
          </button>
        </div>
      )}
      <h2 className={h2}>Galería</h2>
      <div className={topDiv}>
        <button className={enlargePicButton} onClick={enlargeImageHandler}>
          <div className={fullscreenIconDivTL}> </div>
          <div className={fullscreenIconDivTR}> </div>
          <div className={fullscreenIconDivBL}> </div>
          <div className={fullscreenIconDivBR}> </div>
        </button>
        <button className={prevButton} onClick={prevImage}>
          <div className={galleryLeftButtonArrow}></div>
        </button>
        <div
          className={bigPictureContainer}
          //onClick={enlargeImageHandler}
        >
          <Image
            src={galleryImages[currentImage]}
            priority={true}
            fill={true}
            sizes="100vw"
            style={{ objectFit: "cover", maxHeight: "100%" }}
            placeholder="blur"
            alt="Full size selected gallery image"
          />
        </div>
        <button className={nextButton} onClick={nextImage}>
          <div className={galleryRightButtonArrow}></div>
        </button>
      </div>
      <div className={smallPictureContainer}>
        {galleryImages.map((pic, index) => {
          return (
            <div key={index} id={index} className={index === currentImage ? selectedMiniPicSelect : miniPicSelect} onClick={imageSelect}>
              {/* <p id={index} className={verP}>
                Ver
              </p> */}
              <div id={index} className={smallPicture}>
                <Image
                  id={index}
                  src={pic}
                  priority={true}
                  fill={true}
                  sizes="100vw"
                  style={{ objectFit: "cover" }}
                  // placeholder="blur"
                  alt="Miniature gallery image"
                />
              </div>
            </div>
          );
        })}
      </div>
      <div className={line}></div>
    </div>
  );
}

/* {galeryPics.map((pic, index) => {
    return (
      <div key={index} id={index} className={index === currentImage ? selectedMiniPicSelect : miniPicSelect} onClick={imageSelect}>
        <p id={index} className={verP}>
          Ver
        </p>
        <div id={index} className={smallPicture}>
          <Image id={index} src={pic} priority={true} fill={true} style={{ objectFit: "cover" }} placeholder="blur" alt="Miniature gallery image" />
        </div>
      </div>
    );
  })} */
