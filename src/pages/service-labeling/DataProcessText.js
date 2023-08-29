import ServiceLabelingSubTitle from "./components/ServiceLabelingSubTitle";
import DataTypeMenu from "./components/DataTypeMenu";
import DataProcessTextTitle from "./components/DataProcessTextTitle";
import DataProcessTextDataSet from "./components/DataProcessTextDataSet";
import Strength from "../../components/strength/Strength";
import SubTab from "../../components/tab/SubTab";
import { Helmet } from "react-helmet";

export default function DataProcessText() {
  return (
    <>
      <Helmet>
        <title>젠데이터</title>
      </Helmet>
      <ServiceLabelingSubTitle />
      <DataTypeMenu />
      <DataProcessTextTitle />
      <DataProcessTextDataSet />
      <Strength />
      <SubTab />
    </>
  );
}
