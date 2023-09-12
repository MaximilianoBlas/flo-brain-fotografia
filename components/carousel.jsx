import React, { useState } from "react";
import { useInterval } from "@/hook/useInterval";
import Image from "next/image";

import {
  carouselImageContainer1,
  carouselImageContainer2,
  carouselImageContainer01,
  carouselImageContainer02,
  carouselImg,
  carouselMainContainer,
  carouselImageStatic,
  carouselButtonContainer,
  carouselMainButtonContainer,
  carouselButton,
  mainContainer,
} from "../styles/_carousel.module.scss";

function Carousel() {
  const [arrayCarousel, setArrayCarousel] = useState(["/Carousel 1.jpg", "/Carousel 2.jpg", "/Carousel 3.jpg", "/Carousel 4.jpg"]);
  const [refresh, setRefresh] = useState(false);

  const carouselMove = () => {
    if (refresh) {
      let fistElement = arrayCarousel.shift();
      arrayCarousel.push(fistElement);
      setArrayCarousel(arrayCarousel);
    }
  };

  let arrayCarrouselOrigin = ["/Carousel 1.jpg", "/Carousel 2.jpg", "/Carousel 3.jpg", "/Carousel 4.jpg"];

  const changeIndexCarrousel = (e) => {
    let newArrayCarrousel = arrayCarrouselOrigin;
    for (let i = 0; i < e.target.name; i++) {
      newArrayCarrousel.push(newArrayCarrousel.shift());
    }
    setRefresh(false);
    setArrayCarousel(arrayCarrouselOrigin);

    setTimeout(() => {
      setRefresh(false);
      setTimeout(() => {
        setRefresh(false);
        setTimeout(() => {
          setRefresh(false);
        }, 150);
      }, 150);
    }, 150);
  };
  useInterval(
    () => {
      setRefresh(!refresh);
      carouselMove();
    },
    refresh ? 1000 : 3000
  );

  return (
    <div className={mainContainer}>
      <div className={carouselMainContainer}>
        <div style={refresh ? { opacity: "0" } : { opacity: "1" }} className={carouselImageStatic}>
          <Image fill="true" className={carouselImg} src={arrayCarousel[0]} alt="Corrousel image" style={{ objectFit: "contain" }} />
        </div>
        <div style={refresh ? { animationIterationCount: "infinite" } : { animationIterationCount: "0" }} className={refresh ? carouselImageContainer01 : carouselImageContainer1}>
          <Image fill className={carouselImg} src={arrayCarousel[0]} alt="Corrousel image" style={{ objectFit: "contain" }} />
        </div>
        <div style={refresh ? { animationIterationCount: "infinite" } : { animationIterationCount: "0" }} className={refresh ? carouselImageContainer02 : carouselImageContainer2}>
          <Image fill className={carouselImg} src={arrayCarousel[1]} alt="Corrousel image" style={{ objectFit: "contain" }} />
        </div>
        <div className={carouselMainButtonContainer}>
          <div className={carouselButtonContainer}>
            {arrayCarrouselOrigin.map((e, i) => {
              if (e === arrayCarousel[0]) {
              }
              return (
                <button
                  style={e === arrayCarousel[0] ? { backgroundColor: "white" } : { background: "gray" }}
                  name={i}
                  onClick={(e) => changeIndexCarrousel(e)}
                  key={i}
                  className={carouselButton}
                ></button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Carousel;
