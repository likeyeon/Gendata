// import styles from "./Main.module.scss";
import Background from "./components/background/Background";
import BuildingData from "./components/buildingData/BuildingData";
import Business from "./components/business/Business";
import Clients from "./components/clients/Clients";
import SemoAi from "./components/semoAi/SemoAi";
import IssueAndSecurity from "./components/issueAndSecurity/IssueAndSecurity";
import BottomBanner from "./components/bottom-banner/BottomBanner";
import Contact from "./components/MainContact/MainContact";
import { Helmet } from "react-helmet";

const Main = () => {
  return (
    <>
      <Helmet>
        <title>젠데이터</title>
      </Helmet>
      <Background />
      <Clients />
      <BuildingData />
      <IssueAndSecurity />
      <SemoAi />
      <Business />
      <BottomBanner />
      <Contact />
    </>
  );
};

export default Main;
