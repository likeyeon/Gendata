import Gnb from "../../components/gnb/Gnb";
import ServiceLabelingSubTitle from "./components/ServiceLabelingSubTitle";
import DataTypeMenu from "./components/DataTypeMenu";
import DataProcessAudioTitle from "./components/DataProcessAudioTitle";
import DataProcessAudioDataSet from "./components/DataProcessAudioDataSet";
import Strength from "../../components/strength/Strength";
import SubTab from "./components/common/SubTab";

export default function DataProcessAudio() {
  return (
    <div>
      <Gnb />
      <div>
        <ServiceLabelingSubTitle />
        <DataTypeMenu />
        <DataProcessAudioTitle />
        <DataProcessAudioDataSet />
        <Strength />
        <SubTab />
      </div>
    </div>
  )
}
