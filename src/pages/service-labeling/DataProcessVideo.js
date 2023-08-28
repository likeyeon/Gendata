import ServiceLabelingSubTitle from "./components/ServiceLabelingSubTitle";
import DataTypeMenu from "./components/DataTypeMenu";
import DataProcessVideoTitle from "./components/DataProcessVideoTitle";
import DataProcessAVideoDataSet from "./components/DataProcessVideoDataSet";
import Strength from "../../components/strength/Strength";
import SubTab from "../../components/tab/SubTab";

export default function DataProcessVideo() {
  return (
    <>
      <ServiceLabelingSubTitle />
      <DataTypeMenu />
      <DataProcessVideoTitle />
      <DataProcessAVideoDataSet />
      <Strength />
      <SubTab />
    </>
  )
}
