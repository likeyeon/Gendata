import Strength from "../../components/strength/Strength";
import Contact from "../ai-development/components/Contact";
import InHouseTitle from "./components/InHouseTitle";
import InHouseWorkProcess from "./components/InHouseWorkProcess";
import InHousePrevention from "./components/InHousePrevention";
import InHouseManage from "./components/InHouseManage";
import { Helmet } from "react-helmet";

export default function InHouseOperation() {
  return (
    <>
      <Helmet>
        <title>품질 및 보안</title>
      </Helmet>
      <InHouseTitle />
      <InHouseWorkProcess />
      <InHousePrevention />
      <InHouseManage />
      <Strength />
      <Contact />
    </>
  );
}
