import CatalogCards from "../../components/catalogCards/CatalogCards";
import styles from './Catalog.module.scss'
import BreadCrumbs from "../../components/breadСrumbs/BreadCrumbs";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../store/store";
import {getProducts, setProducts} from "../../store/reducers/Products/ProductsReducer";
import {useEffect} from "react";
import {CategoryItems} from "../../shared/types/CatalogTypes";

export default function Catalog() {
    const products = useSelector((state: RootState)=>getProducts(state))
    const dispatch = useDispatch()
    useEffect(()=> {
            dispatch(setProducts())
        }
    ,[])

    return <div className={styles.mainContainer}>
        <div className={styles.catalogBox}>
            <div className={styles.breadCrumbsContainer}>
                <BreadCrumbs/>
            </div>
            {products && <div className={styles.catalogMargin}>
                {products.items.map((item)=><div className={styles.catalogMiddleMargin} key={item.uid}>
                    <CatalogCards text={item.name} cards={item.children as CategoryItems[]}/>
                </div>)}
            </div>}
        </div>
    </div>
}