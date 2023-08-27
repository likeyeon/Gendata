import styles from "./Iframe.module.scss";

const Iframe = () => {
  return (
    <div className={styles.iframe_section}>
      <div className={styles.iframe_wrapper}>
        <iframe
          className={styles.iframe}
          src="https://player.vimeo.com/video/816239822?title=0&amp;muted=1&amp;autoplay=1&amp;autopause=0&amp;controls=0&amp;loop=1&amp;background=1&amp;app_id=122963"
          frameborder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          title="배너 동영상"
          data-ready="true"
        ></iframe>
      </div>
    </div>
  );
};

export default Iframe;
