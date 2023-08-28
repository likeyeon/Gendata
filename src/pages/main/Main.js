import styles from "./Main.module.scss";
import Background from "./components/background/Background";
import BuildingData from "./components/buildingData/BuildingData";
import Business from "./components/business/Business";
import Clients from "./components/clients/Clients";
import SemoAi from "./components/semoAi/SemoAi";

const Main = () => {
  return (
    <>
      <Background />
      <Clients />
      <BuildingData />
      <SemoAi />
      <Business />
    </>
  );
};

export default Main;
