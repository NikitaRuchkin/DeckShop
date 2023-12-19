import styles from "./Badge.module.scss";
import cn from "clsx";

interface IProp {
    text: string
    icon: string
}

export default function Badge({text, icon}: IProp) {
    return <div className={styles.specialContainer}>
            <div className={styles.specialContainer__special}>{text}</div>
            <div className={cn(styles.specialContainer__special_arrow, `${icon}`)}/>
        </div>
}