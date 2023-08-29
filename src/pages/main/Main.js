// import styles from "./Main.module.scss";
import Background from "./components/background/Background";
import BuildingData from "./components/buildingData/BuildingData";
import Business from "./components/business/Business";
import Clients from "./components/clients/Clients";
import SemoAi from "./components/semoAi/SemoAi";
import BottomBanner from "./components/bottom-banner/BottomBanner";
import Contact from "./components/MainContact/MainContact";

const Main = () => {
  return (
    <>
      <Background />
      <Clients />
      <BuildingData />
      <SemoAi />
      <Business />
      <BottomBanner />
      <Contact />
    </>
  );
};

export default Main;
