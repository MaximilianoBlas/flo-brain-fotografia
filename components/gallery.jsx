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
  prevEnlargedPicButton,
  nextEnlargedPicButton,
  closeEnlargedPicButton,
  closeEnlargedPicButtonLinesR,
  closeEnlargedPicButtonLinesL,
} from "@/styles/_galery.module.scss";

import galleryImages from "@/utils/galleryImports";

export default function Gallery({ windowWidth }) {
  // const galeryPics = [pic1, pic2, pic3, pic4, pic5];

  let [currentImage, setCurrentImage] = useState(0);
  let [enlargedImage, setEnlargedImage] = useState(false);
  let [onCS, setOnCS] = useState(false);

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
    // console.log(currentImage);
    setOnCS(true);
  }, []);

  return (
    onCS && (
      <div className={galeryContainer}>
        {enlargedImage && (
          <div
            // style={{ height: "100vh", width: "100vw", position: "fixed", top: 0, left: 0, backgroundColor: "rgba(0, 0, 0, 0.8)", zIndex: 100 }}
            className={enlargedPicContainer}
          >
            <button className={prevEnlargedPicButton} onClick={prevImage}>
              <div className={galleryLeftButtonArrow}></div>
            </button>
            <Image
              fill
              sizes="100vw"
              priority={true}
              style={{ maxHeight: "100%", objectFit: "scale-down", opacity: 1 }}
              src={galleryImages[currentImage]}
              alt="Fullscreen selected galery image"
            />
            <button className={nextEnlargedPicButton} onClick={nextImage}>
              <div className={galleryRightButtonArrow}></div>
            </button>
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
              sizes="(max-width: 1080px) 100vw"
              // style={{ objectFit: "cover", maxHeight: "100%" }}
              // style={{ objectFit: "contain", maxHeight: "100%" }}
              style={{
                objectFit: windowWidth > 850 ? "scale-down" : "cover",
                // maxHeight: "100%"
              }}
              // placeholder="blur"
              alt="Full size preview selected gallery image"
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
                    // priority={true}
                    fill={true}
                    sizes="(max-width: 500px) 40vw"
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
    )
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
