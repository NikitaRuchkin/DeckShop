import styles from './Button.module.scss'
import cn from 'clsx'
import {ButtonType} from "../../shared/types/ButtonTypes";
import {Link} from "react-router-dom";

interface IButtonProps {
    text?: string;
    fontSize?: number;
    type?: ButtonType;
    imageClassName?: string;
    link?: string;
    href?: string;
    click?: ()=> void;
    disable?: boolean;
}

function Button ({text, type, imageClassName, fontSize, link, href, click, disable = false }: IButtonProps) {

    if(link) {
        return <Link
            to={link}
            className={cn(styles.main,
                type === ButtonType.Blue && styles.main__blue,
                type === ButtonType.White && styles.main__white,
                type === ButtonType.Red && styles.main__red,
                type === ButtonType.Grey && styles.main__grey,
                type === ButtonType.Blue && disable && styles.main__blue_disable,
                type === ButtonType.White && disable &&  styles.main__white_disable,
                type === ButtonType.Red && disable &&  styles.main__red_disable,
                !text && styles.imagePadding)}
        >
            {text && <div className={cn(styles.text)}>
                {text}
            </div>}
            {imageClassName && <div className={imageClassName} style={{fontSize: `${fontSize}px`}}/>}
        </Link>
    }

    if(href) {
        return <a href={href}
            className={cn(styles.main,
                type === ButtonType.Blue && styles.main__blue,
                type === ButtonType.White && styles.main__white,
                type === ButtonType.Red && styles.main__red,
                type === ButtonType.Grey && styles.main__grey,
                type === ButtonType.Blue && disable && styles.main__blue_disable,
                type === ButtonType.White && disable &&  styles.main__white_disable,
                type === ButtonType.Red && disable &&  styles.main__red_disable,
                !text && styles.imagePadding)}
        >
            {text && <div className={cn(styles.text)}>
                {text}
            </div>}
            {imageClassName && <div className={imageClassName} style={{fontSize: `${fontSize}px`}}/>}
        </a>
    }
    return <div
        className={cn(styles.main,
            type === ButtonType.Blue && styles.main__blue,
            type === ButtonType.White && styles.main__white,
            type === ButtonType.Red && styles.main__red,
            type === ButtonType.Grey && styles.main__grey,
            type === ButtonType.Blue && disable && styles.main__blue_disable,
            type === ButtonType.White && disable &&  styles.main__white_disable,
            type === ButtonType.Red && disable &&  styles.main__red_disable,
            !text && styles.imagePadding)}
        onClick={disable? ()=>{} : click}
    >
        {text && <div className={cn(styles.text)}>
            {text}
        </div>}
        {imageClassName && <div className={imageClassName} style={{fontSize: `${fontSize}px`}}/>}
    </div>
}

export default Button