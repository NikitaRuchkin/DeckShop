import styles from './RegistrationProcess.module.scss'
import Steps from "../Steps/Steps";
import cn from "clsx";

interface IProp {
  step: number;
}

export default function RegistrationProcess({step}: IProp) {
  return <div className={styles.mainContainer}>
    <div className={styles.registration__title}>Registration process</div>
    <div><Steps step={step} textFirst='Account details'  textSecond='Primary address' textThird='Phone confirmation'/></div>
    <div className={cn(styles.bgIcon, 'icon-circle')}/>
  </div>
}

