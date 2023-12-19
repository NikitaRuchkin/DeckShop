import styles from './LinkCategory.module.scss'

interface IProp {
    text: string;
}

export default function LinkCategory({text}: IProp) {
    return <div>
        <div className={styles.linkCategory__text}>{text}</div>
    </div>
}