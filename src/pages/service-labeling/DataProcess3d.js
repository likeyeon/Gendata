import ServiceLabelingSubTitle from "./components/ServiceLabelingSubTitle";
import DataTypeMenu from "./components/DataTypeMenu";
import DataProcess3dTitle from "./components/DataProcess3dTitle";
import DataProcess3dDataSet from "./components/DataProcess3DataSet";
import Strength from "../../components/strength/Strength";
import SubTab from "../../components/tab/SubTab";
import { Helmet } from "react-helmet";

export default function DataProcess3d() {
  return (
    <>
      <Helmet>
        <title>젠데이터</title>
      </Helmet>
      <ServiceLabelingSubTitle />
      <DataTypeMenu />
      <DataProcess3dTitle />
      <DataProcess3dDataSet />
      <Strength />
      <SubTab />
    </>
  );
}
