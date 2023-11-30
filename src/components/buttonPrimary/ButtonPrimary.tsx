import cn from 'clsx'
import styles from './ButtonPrimary.module.scss'
import {ButtonType} from "../../shared/types/ButtonTypes";

interface IButtonProps {
    text?: string;
    fontSize?: number;
    heightImage?: number;
    imageClassName?: string;
}

function Button ({text, imageClassName, fontSize }: IButtonProps) {
    return (
        <div
            className={cn(styles.main, text? styles.main__withOutImage : styles.main__image)}
        >
            {text && <div className={cn(styles.text)}>
                {text}
            </div>}
            {imageClassName && <div className={imageClassName} style={{fontSize: `${fontSize}px`}}/>}
        </div>
    )
}

export default Button