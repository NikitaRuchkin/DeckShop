import cn from 'clsx'
import styles from './BadgeSecondary.module.scss'

interface IProp {
    text: string;
    black?: boolean;
}

export default function BadgeSecondary({text, black = false}: IProp) {
    return <div className={cn(styles.main, black && styles.black)}>{text}</div>
}