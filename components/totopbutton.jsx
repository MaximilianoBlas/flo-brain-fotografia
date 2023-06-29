import { toTopButton } from "@/styles/_to-top-button.module.scss";

export default function ToTopButton({ props }) {
  let { yAxis } = props;

  function onTopButtonClickHandler() {
    // console.log(document);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  return (
    <button style={yAxis >= 302 ? { opacity: 1 } : { opacity: 0, zIndex: -1 }} className={toTopButton} onClick={onTopButtonClickHandler}>
      ↑
    </button>
  );
}
