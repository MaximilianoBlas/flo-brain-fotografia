import { deployableNavBarButton, lines } from "@/styles/_deployablenavbarbutton.module.scss";
import { useState } from "react";

export default function DeployableNavBarButton({ props }) {
  let { yAxis } = props;

  let [deployNavBar, setDeployNavBar] = useState(false);

  function navBarButtonClickHandler() {
    console.log("im navbar!", deployNavBar);
    setDeployNavBar(!deployNavBar);
  }

  // useState(() => {
  //   console.log(deployNavBar);
  // }, []);

  return (
    <button style={yAxis >= 302 ? { opacity: 1 } : { opacity: 0, zIndex: -1 }} className={deployableNavBarButton} onClick={navBarButtonClickHandler}>
      <div className={lines}></div>
      <div className={lines}></div>
      <div className={lines}></div>
    </button>
  );
}
