import styles from "./Clients.module.scss";
import Inside from "../../../../components/inside/Inside";
import ClientsTitle from "./ClientsTitle";
// import Swipe from "./Swipe";
import AiTitle from "./AiTitle";

const Clients = () => {
  return (
    <main>
      <Inside>
        <ClientsTitle />
        {/* <Swipe /> */}
        <AiTitle />
      </Inside>
    </main>
  );
};

export default Clients;
