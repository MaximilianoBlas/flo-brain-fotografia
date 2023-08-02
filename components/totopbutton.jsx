import { toTopButton } from "@/styles/_to-top-button.module.scss";
import { useEffect, useState } from "react";

export default function ToTopButton({ yAxis }) {
  // let { yAxis } = props;

  const [onClient, setOnClient] = useState(false);

  function onTopButtonClickHandler() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  useEffect(() => {
    setOnClient(true);
    console.log("toTopButton onClient");
  }, []);

  return (
    onClient && (
      <button style={yAxis >= 302 ? { opacity: 1 } : { opacity: 0, zIndex: -1 }} className={toTopButton} onClick={onTopButtonClickHandler}>
        ↑
      </button>
    )
  );
}
