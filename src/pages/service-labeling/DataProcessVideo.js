import ServiceLabelingSubTitle from "./components/ServiceLabelingSubTitle";
import DataTypeMenu from "./components/DataTypeMenu";
import DataProcessVideoTitle from "./components/DataProcessVideoTitle";
import DataProcessAVideoDataSet from "./components/DataProcessVideoDataSet";
import Strength from "../../components/strength/Strength";
import SubTab from "../../components/tab/SubTab";
import { Helmet } from "react-helmet";

export default function DataProcessVideo() {
  return (
    <>
      <Helmet>
        <title>젠데이터</title>
      </Helmet>
      <ServiceLabelingSubTitle />
      <DataTypeMenu />
      <DataProcessVideoTitle />
      <DataProcessAVideoDataSet />
      <Strength />
      <SubTab />
    </>
  );
}
