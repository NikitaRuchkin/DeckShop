import styles from './Steps.module.scss'
import cn from "clsx";

interface IProp {
  step: number;
  textFirst: string;
  textSecond: string;
  textThird?: string;
}

export default function Steps({step, textThird, textSecond, textFirst}:IProp) {
  return     <div>
    <div className={styles.checkout__stepFlex}>
      <div className={styles.checkout__stepNumberContainer}>
        {step === 1?
            <div className={styles.checkout__stepNumber}>1</div>
            :
            <div className={cn('icon-check')}/>}
      </div>
      <div className={styles.checkout__stepText}>{textFirst}</div>
    </div>
    <div className={styles.line}/>
    <div className={styles.checkout__stepFlex}>
      <div className={cn(styles.checkout__stepNumberContainer, step < 2 && styles.checkout__stepNumberContainerEmpty)}>
        {step === 2 || step === 1?
            <div className={cn(styles.checkout__stepNumber, step < 2 && styles.checkout__stepNumberWhite)}>2</div>
            :
            <div className={cn('icon-check')}/>}
      </div>
      <div className={styles.checkout__stepText}>{textSecond}</div>
    </div>
    {textThird && <div className={styles.line}/>}
    {textThird && <div className={styles.checkout__stepFlex}>
      <div className={cn(styles.checkout__stepNumberContainer, step < 3 && styles.checkout__stepNumberContainerEmpty)}>
        <div className={cn(styles.checkout__stepNumber, step < 3 && styles.checkout__stepNumberWhite)}>3</div>
      </div>
      <div className={styles.checkout__stepText}>{textThird}</div>
    </div>
    }
  </div>
}