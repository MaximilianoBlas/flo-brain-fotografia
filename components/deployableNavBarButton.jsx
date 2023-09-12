import { deployableNavBarButton, lines } from "@/styles/_deployablenavbarbutton.module.scss";
import { useEffect, useState } from "react";

export default function DeployableNavBarButton({ yAxis }) {
  // let { yAxis } = props;

  // const [onClient, setOnClient] = useState(false);
  let [deployNavBar, setDeployNavBar] = useState(false);

  function navBarButtonClickHandler() {
    console.log("im navbar!", deployNavBar);
    setDeployNavBar(!deployNavBar);
  }

  useEffect(() => {
    console.log("deployableNavBarButton onClient");
  }, []);

  // useEffect(() => {
  //   setOnClient(true);
  //   console.log("deployableNavBarButton onClient");
  // }, []);

  return (
    onClient && (
      <button style={yAxis >= 302 ? { opacity: 1 } : { opacity: 0, zIndex: -1 }} className={deployableNavBarButton} onClick={navBarButtonClickHandler}>
        <div className={lines}></div>
        <div className={lines}></div>
        <div className={lines}></div>
      </button>
    )
  );
}
