import CatalogCards from "../../components/catalogCards/CatalogCards";
import styles from './Catalog.module.scss'
import BreadCrumbs from "../../components/breadСrumbs/BreadCrumbs";

const data = [
    {
        name: 'Pressure-treated',
        link: '',
        icon: '',
    },
    {
        name: 'Cedar',
        link: '',
        icon: '',
    },
    {
        name: 'Redwood',
        link: '',
        icon: '',
    },
    {
        name: 'Composite',
        link: '',
        icon: '',
    },
    {
        name: 'Tropical hardwood',
        link: '',
        icon: '',
    },
    {
        name: 'Ipe',
        link: '',
        icon: '',
    },
]

export default function Catalog() {
    return <div className={styles.mainContainer}>
        <div className={styles.catalogBox}>
            <div className={styles.breadCrumbsContainer}>
                <BreadCrumbs/>
            </div>
            <CatalogCards text='Decking' cards={data}/>
            <div className={styles.catalogMargin}>
                <CatalogCards text='General' cards={data}/>
            </div>
            <CatalogCards text='Brands' cards={data}/>
        </div>
    </div>
}