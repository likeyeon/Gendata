import ServiceLabelingSubTitle from "./components/ServiceLabelingSubTitle";
import DataTypeMenu from "./components/DataTypeMenu";
import DataProcessAudioTitle from "./components/DataProcessAudioTitle";
import DataProcessAudioDataSet from "./components/DataProcessAudioDataSet";
import Strength from "../../components/strength/Strength";
import SubTab from "../../components/tab/SubTab";
import { Helmet } from "react-helmet";

export default function DataProcessAudio() {
  return (
    <>
      <Helmet>
        <title>젠데이터</title>
      </Helmet>
      <ServiceLabelingSubTitle />
      <DataTypeMenu />
      <DataProcessAudioTitle />
      <DataProcessAudioDataSet />
      <Strength />
      <SubTab />
    </>
  );
}
