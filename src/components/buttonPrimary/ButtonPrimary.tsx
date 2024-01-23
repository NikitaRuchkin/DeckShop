import cn from 'clsx'
import styles from './ButtonPrimary.module.scss'
import {Link} from "react-router-dom";

interface IButtonProps {
    text?: string;
    fontSize?: number;
    heightImage?: number;
    imageClassName?: string;
    link?: string;
}

function Button ({text, imageClassName, fontSize, link }: IButtonProps) {
    if(link) {
        return <Link
            to={link}
            className={cn(styles.main, text? styles.main__withOutImage : styles.main__image)}
        >
            {text && <div className={cn(styles.text)}>
                {text}
            </div>}
            {imageClassName && <div className={imageClassName} style={{fontSize: `${fontSize}px`}}/>}
        </Link>
    }

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