import ServiceLabelingSubTitle from "./components/ServiceLabelingSubTitle";
import DataTypeMenu from "./components/DataTypeMenu";
import DataProcessAudioTitle from "./components/DataProcessAudioTitle";
import DataProcessAudioDataSet from "./components/DataProcessAudioDataSet";
import Strength from "../../components/strength/Strength";
import SubTab from "../../components/tab/SubTab";

export default function DataProcessAudio() {
  return (
    <>
      <ServiceLabelingSubTitle />
      <DataTypeMenu />
      <DataProcessAudioTitle />
      <DataProcessAudioDataSet />
      <Strength />
      <SubTab />
    </>
  )
}
