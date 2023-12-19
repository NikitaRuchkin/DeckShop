import cn from 'clsx'
import {Link, useLocation} from "react-router-dom";
import styles from './BreadCrumbs.module.scss'


export default function BreadCrumbs() {
    const path = useLocation()
    const links = path.pathname.split('/')
    const createLinkByIndex = (index: number): string => {
        let linksById = ''
        for(let i = 0; i <= index; i++) {
            if(i>0 || i === index) {
                linksById = linksById + '/' + links[i]
            } else {
                linksById = linksById + links[i]
            }
        }
        return linksById
    }
    return <div className={styles.main}>
        <Link className={cn('icon-house', styles.house)} to={'/'}/>
        {links && links.map(
            (item, index)=> {
                return (
                <div key={index} className={styles.linkComponent}>
                  <Link className={cn(styles.linkText, index === links.length-1 && styles.linkTextBold)} to={createLinkByIndex(index)}>{item}</Link>
                  {index !== links.length-1 && <div className={cn('icon-chevron-right', styles.arrowRight)} />}
                </div>
                )
            }
        )}
    </div>
}