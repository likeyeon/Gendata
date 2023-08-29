import { useCallback, useEffect, useRef } from "react";
import styles from "./Iframe.module.scss";

const Iframe = () => {
  const iframeEl = useRef(null);
  const iframeWrapperEl = useRef(null);

  const resizeHandler = useCallback(() => {
    if (iframeEl.current === null || iframeWrapperEl.current === null) {
      return;
    }
    const iframeWrapperElement = iframeWrapperEl.current;
    const iframeElement = iframeEl.current;

    const wrapperWidth = iframeWrapperElement.clientWidth;
    const wrapperHeight = iframeWrapperElement.clientHeight;

    const originWidth = iframeElement.clientWidth;
    const originHeight = iframeElement.clientHeight;

    const width = wrapperWidth + 20;
    const height = wrapperHeight + 20;

    if (width / height > originWidth / originHeight) {
      iframeElement.setAttribute("width", width);
      iframeElement.setAttribute("width", width / (originWidth / originHeight));
      iframeWrapperElement.setAttribute("style", "left: -10px; top: -10px");
    } else {
      iframeElement.setAttribute(
        "width",
        height * (originWidth / originHeight)
      );
      iframeElement.setAttribute("width", height);
      iframeWrapperElement.setAttribute(
        "style",
        `left: -${(iframeElement.clientWidth - width) / 2 - 10}px; top: -10px`
      );
    }
  }, [iframeEl, iframeWrapperEl]);

  useEffect(() => {
    window.addEventListener("resize", resizeHandler);

    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, [resizeHandler]);

  return (
    <div className={styles.iframe_container}>
      <div ref={iframeWrapperEl} className={styles.iframe_wrapper}>
        <iframe
          ref={iframeEl}
          className={styles.iframe}
          src="https://player.vimeo.com/video/816239822?title=0&amp;muted=1&amp;autoplay=1&amp;autopause=0&amp;controls=0&amp;loop=1&amp;background=1&amp;app_id=122963"
          frameborder="0"
          allow="autoplay; picture-in-picture; fullscreen"
          title="배너 동영상"
          data-ready="true"
        ></iframe>
      </div>
    </div>
  );
};

export default Iframe;
