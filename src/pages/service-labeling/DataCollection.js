import DataCollectionTitle from "./components/DataCollectionTitle";
import DataCollectionDescription from "./components/DataCollectionDescription";
import DataCollectionEquipment from "./components/DataCollectionEquipment";
import Strength from "../../components/strength/Strength";
import MainTab from "../../components/tab/MainTab";
import Contact from "../ai-development/components/Contact";

export default function DataCollection() {
  return (
    <>
      <DataCollectionTitle / >
      <DataCollectionDescription />
      <DataCollectionEquipment />
      <Strength />
      <MainTab />
      <Contact />
    </>
  )
}
