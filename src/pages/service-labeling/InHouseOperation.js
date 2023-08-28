import Strength from "../../components/strength/Strength";
import Contact from "../ai-development/components/Contact";
import InHouseTitle from "./components/InHouseTitle";
import InHouseWorkProcess from "./components/InHouseWorkProcess";
import InHousePrevention from "./components/InHousePrevention";
import InHouseManage from "./components/InHouseManage";

export default function InHouseOperation() {
  return (
    <>
      <InHouseTitle />
      <InHouseWorkProcess />
      <InHousePrevention />
      <InHouseManage />
      <Strength />
      <Contact />
    </>
  )
}