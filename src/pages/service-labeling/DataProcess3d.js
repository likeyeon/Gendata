import Gnb from "../../components/gnb/Gnb";
import ServiceLabelingSubTitle from "./components/ServiceLabelingSubTitle";
import DataTypeMenu from "./components/DataTypeMenu";

import styles from "./DataProcess3d.scss";

export default function DataProcess3d() {
  return (
    <div className={styles.Container}>
      <Gnb />
      <div>
        <ServiceLabelingSubTitle />
        <DataTypeMenu />
      </div>
    </div>
  )
}
