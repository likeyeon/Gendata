import Strength from "../../components/strength/Strength";

import ServiceLabelingMainTitle from "./components/ServiceLabelingMainTitle";
import DataTypeCategory from "./components/DataTypeCategory";
import DataProcessImageTitle from "./components/DataProcessImageTitle";
import DataProcessImageDataSet from "./components/DataProcessImageDataSet";

import MainTab from "../../components/tab/MainTab";
import { Helmet } from "react-helmet";

export default function ServiceLabeling() {
  return (
    <>
      <Helmet>
        <title>데이터라벨링 서비스</title>
      </Helmet>
      <ServiceLabelingMainTitle />
      <DataTypeCategory />
      <DataProcessImageTitle />
      <DataProcessImageDataSet />
      <Strength />
      <MainTab />
    </>
  );
}
