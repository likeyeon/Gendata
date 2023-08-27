import Strength from "../../components/strength/Strength";

import ServiceLabelingMainTitle from "./components/ServiceLabelingMainTitle";
import DataTypeCategory from "./components/DataTypeCategory";
import DataProcessImageTitle from "./components/DataProcessImageTitle";
import DataProcessImageDataSet from "./components/DataProcessImageDataSet";

import MainTab from "../../components/tab/MainTab";

export default function ServiceLabeling() {
  return (
    <>
      <ServiceLabelingMainTitle />
      <DataTypeCategory />
      <DataProcessImageTitle />
      <DataProcessImageDataSet />
      <Strength />
      <MainTab />
    </>
  )
}