import Utils from "@/utils/globalValues";
// import igLogo from "@/public/media/social/ig-color.png";
// import wppLogo from "@/public/media/social/wpp-green.png";
import igSVG from "@/public/media/social/svg/instagram.svg";
import wppSVG from "@/public/media/social/svg/wpp-black.svg";

import { useEffect, useState } from "react";
import Image from "next/image";

import { mainDiv, toIgButton, toWppButton, wppSVGStyle } from "@/styles/_contactbuttons.module.scss";

export default function ContactButtons({ yAxis, windowWidth }) {
  let { yAxisVisibleButtonValue, florWpp } = Utils;

  let [onClient, setOnClient] = useState(false);

  useEffect(() => {
    setOnClient(true);
  }, []);

  return (
    onClient && (
      <div className={mainDiv}>
        <a
          href={`https://wa.me/${florWpp}`}
          target="_blank"
          style={(windowWidth <= 850 && yAxis >= 302) || (windowWidth > 850 && yAxis >= 390) ? { opacity: 1 } : { opacity: 0, zIndex: -1 }}
          className={toWppButton}
        >
          <Image
            src={wppSVG}
            // height={38}
            // width={38}
            fill={true}
            alt="Whatsapp logo"
            style={{ objectFit: "contain" }}
            className={wppSVGStyle}
          />
        </a>
        <a
          href="https://www.instagram.com/flobrainfotografia/"
          target="_blank"
          style={yAxis >= yAxisVisibleButtonValue ? { opacity: 1 } : { opacity: 0, zIndex: -1 }}
          className={toIgButton}
        >
          <Image src={igSVG} fill={true} alt="Instagram logo" style={{ objectFit: "contain" }} />
        </a>
      </div>
    )
  );
}
