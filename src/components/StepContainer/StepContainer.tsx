import styles from './StepContainer.module.scss'
import Steps from "../Steps/Steps";
import cn from "clsx";

interface IProp {
  step: number;
  large?: boolean;
  medium?: boolean;
  textFirst: string;
  textSecond: string;
  textThird?: string;
  title: string;
}

export default function StepContainer({step, large, medium, textFirst, textSecond, textThird, title}:IProp) {
  return <div className={cn(styles.checkout, medium && styles.checkout__medium, large && styles.checkout__large)}>
    <div className={styles.checkout__text}>{title}</div>
    <div>
      <Steps step={step} textFirst={textFirst}  textSecond={textSecond} textThird={textThird && textThird}/>
    </div>
    <div className={cn(styles.bgIcon, medium && styles.bgMedium, large && textThird && styles.bgLarge, large && !textThird && styles.bgLargeWithoutThirdText, 'icon-circle')}/>
  </div>
}