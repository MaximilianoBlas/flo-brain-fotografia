import Image from "next/image";

import {
  footerContainer,
  footerImageContainer,
  footerDevsSection,
  footerDevsContainer,
  devName,
  footerDevsContactContainer,
  devContainer,
  footerDevsContact,
  footerDevsIcon,
  devsLine,
} from "@/styles/_footer.module.scss";

import logo from "@/public/media/logo-footer-cropped.png";
import githubLogo from "@/public/media/social/svg/github-blck-svg.svg";
import linkedinLogo from "@/public/media/social/svg/linkedin-black-svg.svg";
import wppLogo from "@/public/media/social/svg/wpp-black.svg";

import { useEffect } from "react";

export default function Footer() {
  // let windowSize = typeof window === "object" && window.innerWidth;

  const buttonsSize = 35;

  // useEffect(() => {
  //   console.log(windowSize);
  // }, [windowSize]);

  // function onDevClickHandler() {
  //   console.log("im github button");
  // }

  //return windowSize < 850 ? (
  return (
    <footer className={footerContainer}>
      <div className={footerImageContainer}>
        <Image src={logo} alt="Footer logo" priority={true} style={{ objectFit: "contain", width: "70vw", height: "auto" }} />
      </div>
      <div style={{ margin: "3px 0 20px 0", border: "1px solid white", borderWidth: "0 0 1px 0", width: "70vw" }}></div>
      <section className={footerDevsSection}>
        <p>Designed and developed by:</p>
        <div className={footerDevsContainer}>
          <div className={devContainer}>
            <p className={devName}>Maximiliano Blas Silva</p>
            <div className={footerDevsContactContainer}>
              <a href="https://github.com/MaximilianoBlas" target="_blank" className={footerDevsContact} style={{ width: buttonsSize + 2, height: buttonsSize + 2 }}>
                <Image src={githubLogo} alt="Github logo" width={buttonsSize} height={buttonsSize} className={footerDevsIcon} />
              </a>
              <a href="https://www.linkedin.com/in/fullstackjs-maxi/" target="_blank" className={footerDevsContact} style={{ width: buttonsSize + 2, height: buttonsSize + 2 }}>
                <Image src={linkedinLogo} alt="Linkedin logo" width={buttonsSize} height={buttonsSize} className={footerDevsIcon} />
              </a>
              <a href="https://wa.me/3416297919" target="_blank" className={footerDevsContact} style={{ width: buttonsSize + 2, height: buttonsSize + 2 }}>
                <Image src={wppLogo} alt="Whatsapp logo" width={buttonsSize} height={buttonsSize} className={footerDevsIcon} />
              </a>
            </div>
          </div>
          <div className={devsLine}></div>
          <div className={devContainer}>
            <p className={devName}>Andrés Torres</p>
            <div className={footerDevsContactContainer}>
              <a href="https://github.com/andrxstorres" target="_blank" className={footerDevsContact} style={{ width: buttonsSize + 2, height: buttonsSize + 2 }}>
                <Image src={githubLogo} alt="Github logo" width={buttonsSize} height={buttonsSize} className={footerDevsIcon} />
              </a>
              <a
                href="https://www.linkedin.com/in/andr%C3%A9s-torres-385a8516b/"
                target="_blank"
                className={footerDevsContact}
                style={{ width: buttonsSize + 2, height: buttonsSize + 2 }}
              >
                <Image src={linkedinLogo} alt="Linkedin logo" width={buttonsSize} height={buttonsSize} className={footerDevsIcon} />
              </a>
              <a href="https://wa.me/2235290462" target="_blank" className={footerDevsContact} style={{ width: buttonsSize + 2, height: buttonsSize + 2 }}>
                <Image src={wppLogo} alt="Whatsapp logo" width={buttonsSize} height={buttonsSize} className={footerDevsIcon} />
              </a>
            </div>
          </div>
        </div>
        <p>Deployed on **. 2023</p>
      </section>
    </footer>
  );
  // : (
  //   <footer>desktop footer</footer>
  // );
}
