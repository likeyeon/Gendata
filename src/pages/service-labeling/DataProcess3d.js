import Gnb from "../../components/gnb/Gnb";
import ServiceLabelingSubTitle from "./components/ServiceLabelingSubTitle";
import DataTypeMenu from "./components/DataTypeMenu";
import DataProcess3dTitle from "./components/DataProcess3dTitle";
import DataProcess3dDataSet from "./components/DataProcess3DataSet";
import Strength from "../../components/strength/Strength";
import SubTab from "./components/common/SubTab";

export default function DataProcess3d() {
  return (
    <div>
      <Gnb />
      <div>
        <ServiceLabelingSubTitle />
        <DataTypeMenu />
        <DataProcess3dTitle />
        <DataProcess3dDataSet />
        <Strength />
        <SubTab />
      </div>
    </div>
  )
}
