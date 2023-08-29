import Gnb from "../../components/gnb/Gnb";
import ServiceLabelingSubTitle from "./components/ServiceLabelingSubTitle";
import DataTypeMenu from "./components/DataTypeMenu";
import DataProcessTextTitle from "./components/DataProcessTextTitle";
import DataProcessTextDataSet from "./components/DataProcessTextDataSet";
import Strength from "../../components/strength/Strength";
import SubTab from "./components/common/SubTab";

export default function DataProcessText() {
  return (
    <div>
      <Gnb />
      <div>
        <ServiceLabelingSubTitle />
        <DataTypeMenu />
        <DataProcessTextTitle />
        <DataProcessTextDataSet />
        <Strength />
        <SubTab />
      </div>
    </div>
  )
}
