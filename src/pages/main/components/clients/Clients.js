import styles from "./Clients.module.scss";
import Inside from "../../../../components/inside/Inside";
import ClientsTitle from "./ClientsTitle";
import AiTitle from "./AiTitle";

// import Swipe from "./Swipe";
import ClientsArr from "./ClientsArr";
import AutoSlider from "./AutoSlider";
//  AutoSlider와 동일 경로에 있는 module.scss 수정 해주세요.
// 속도는 18번째 줄 animationDuration="20s"로 조절해주세요.
// 작업 후 주석은 모두 삭제해주세요.

const Clients = () => {
  return (
    <main className={styles.client}>
      <Inside>
        <ClientsTitle />
        <AutoSlider ImgArr={ClientsArr} animationDuration="300s" />
        <AiTitle />
      </Inside>
    </main>
  );
};

export default Clients;
