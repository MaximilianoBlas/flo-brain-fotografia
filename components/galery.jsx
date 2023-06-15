import Image from "next/image";

import { galeryContainer, h2, line, topDiv, bigPictureContainer, prevButton, nextButton, smallPictureContainer, smallPicture } from "@/styles/_galery.module.scss";
import pic1 from "@/public/galerymedia/1.jpg";
import pic2 from "@/public/galerymedia/2.jpg";
import pic3 from "@/public/galerymedia/3.jpg";
import pic4 from "@/public/galerymedia/4.jpg";
import pic5 from "@/public/galerymedia/5.jpg";

export default function Galery() {
  const galeryPics = [pic1, pic2, pic3, pic4, pic5];
  return (
    <div className={galeryContainer}>
      <h2 className={h2}>Galery</h2>
      <div className={topDiv}>
        <button className={prevButton}>{"<"}</button>

        <div className={bigPictureContainer}>{<Image src={pic1} fill={true} alt="Augmented image" />}</div>
        <button className={nextButton}>{">"}</button>
      </div>
      <div className={smallPictureContainer}>
        {/*galeryPics.map((pic) => {
          return (
            <div key={pic}>
            <p>Ver</p>
              <div className={smallPicture}>
              <Image src={pic} fill />
              </div>
              </div>
              );
        })*/}
      </div>
      <div className={line}></div>
    </div>
  );
}
/*
 <div className={bigPicture}>
   <Image src={pic1} fill={true} alt="Augmented size galery image" />
 </div>
 
 */
