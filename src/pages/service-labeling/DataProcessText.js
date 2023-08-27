import ServiceLabelingSubTitle from "./components/ServiceLabelingSubTitle";
import DataTypeMenu from "./components/DataTypeMenu";
import DataProcessTextTitle from "./components/DataProcessTextTitle";
import DataProcessTextDataSet from "./components/DataProcessTextDataSet";
import Strength from "../../components/strength/Strength";
import SubTab from "../../components/tab/SubTab";

export default function DataProcessText() {
  return (
    <>
      <ServiceLabelingSubTitle />
      <DataTypeMenu />
      <DataProcessTextTitle />
      <DataProcessTextDataSet />
      <Strength />
      <SubTab />
    </>
  )
}
