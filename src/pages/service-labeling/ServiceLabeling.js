import Gnb from "../../components/gnb/Gnb";
import ServiceLabelingMainTitle from './components/ServiceLabelingMainTitle';

import styles from './ServiceLabeling.module.scss';

export default function ServiceLabeling() {
  return (
    <div className={styles.Container}>
      <Gnb />
      <div className={styles.Padding}>
        <ServiceLabelingMainTitle />
      </div>
    </div>
  )
}