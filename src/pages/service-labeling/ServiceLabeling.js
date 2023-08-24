import Gnb from "../../components/gnb/Gnb";
import ServiceLabelingMainTitle from "./components/ServiceLabelingMainTitle";
import DataTypeCategory from "./components/DataTypeCategory";

import styles from './ServiceLabeling.module.scss';

export default function ServiceLabeling() {
  return (
    <div className={styles.Container}>
      <Gnb />
      <div>
        <ServiceLabelingMainTitle />
        <DataTypeCategory />
      </div>
    </div>
  )
}