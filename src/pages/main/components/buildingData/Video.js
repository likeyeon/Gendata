import styles from "./Video.module.scss";

const Video = () => {
  return (
    <div className={styles.video_wrap}>
      <iframe
        width="100%"
        height="705"
        src="https://www.youtube.com/embed/3exYJhoQP0w?si=Vj4jS5qG7O4mBz7l"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default Video;
