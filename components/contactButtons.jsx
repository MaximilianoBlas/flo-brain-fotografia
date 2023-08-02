import Utils from "@/utils/globalValues";
import igLogo from "@/public/media/social/ig-color.png";
import wppLogo from "@/public/media/social/wpp-green.png";

import { useEffect, useState } from "react";
import Image from "next/image";

import { mainDiv, toIgButton, toWppButton } from "@/styles/_contactbuttons.module.scss";

export default function ContactButtons({ yAxis }) {
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
          style={yAxis >= yAxisVisibleButtonValue ? { opacity: 1 } : { opacity: 0, zIndex: -1 }}
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
          style={yAxis >= yAxisVisibleButtonValue ? { opacity: 1 } : { opacity: 0, zIndex: -1 }}
          className={toIgButton}
          //onClick={onIgClickHandler}
        >
          <Image src={igLogo} fill={true} alt="Instagram logo" />
        </a>
      </div>
    )
  );
}
