import styles from "./ClientsTitle.module.scss";
import { Subtitle } from "../../../../components/common/typo/Typo";

const ClientsTitle = () => {
  return (
    <div className={styles.clients_title}>
      <Subtitle subtitle={"CLIENTS"} />
    </div>
  );
};

export default ClientsTitle;
