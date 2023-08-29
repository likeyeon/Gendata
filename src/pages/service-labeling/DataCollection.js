import DataCollectionTitle from "./components/DataCollectionTitle";
import DataCollectionDescription from "./components/DataCollectionDescription";
import DataCollectionEquipment from "./components/DataCollectionEquipment";
import Strength from "../../components/strength/Strength";
import MainTab from "../../components/tab/MainTab";
import Contact from "../ai-development/components/Contact";
import { Helmet } from "react-helmet";

export default function DataCollection() {
  return (
    <>
      <Helmet>
        <title>데이터 수집</title>
      </Helmet>
      <DataCollectionTitle />
      <DataCollectionDescription />
      <DataCollectionEquipment />
      <Strength />
      <MainTab />
      <Contact />
    </>
  );
}
