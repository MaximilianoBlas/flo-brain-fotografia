import Utils from "@/utils/globalValues";
import igLogo from "@/public/media/social/ig-color.png";
import wppLogo from "@/public/media/social/wpp-green.png";

import { useEffect } from "react";
import Image from "next/image";

import { mainDiv, toIgButton, toWppButton } from "@/styles/_contactbuttons.module.scss";

export default function ContactButtons({ props }) {
  let { yAxis } = props;
  let { yAxisVisibleButtonValue } = Utils;
  // useEffect(() => {
  //   console.log(yAxisVisibleButtonValue);
  // }, []);

  // function onWppClickHandler() {
  //   console.log("im wpp button!");
  // }

  // function onIgClickHandler() {
  //   console.log("im ig button!");
  // }
  return (
    <div className={mainDiv}>
      <a
        href="https://wa.me/5493416415852"
        target="_blank"
        style={yAxis >= 302 ? { opacity: 1 } : { opacity: 0, zIndex: -1 }}
        className={toWppButton}
        //</div>onClick={onWppClickHandler}
      >
        <Image
          src={wppLogo}
          height={38}
          width={38}
          //fill={true}
          alt="Whatsapp logo"
        />
      </a>
      <a
        href="https://www.instagram.com/flobrainfotografia/"
        target="_blank"
        style={yAxis >= 302 ? { opacity: 1 } : { opacity: 0, zIndex: -1 }}
        className={toIgButton}
        //onClick={onIgClickHandler}
      >
        <Image src={igLogo} fill={true} alt="Instagram logo" />
      </a>
    </div>
  );
}
