import styles from './Category.module.scss'
import Button from "../../components/button/Button";
import {ButtonType} from "../../shared/types/ButtonTypes";
import {useEffect, useState} from "react";
import Card from "../../components/card/Card";
import BreadCrumbs from "../../components/breadСrumbs/BreadCrumbs";
import FilterDrawer from "../../components/FilterDrawer/FilterDrawer";
import SortByDrawer from "../../components/SortByDrawer/SortByDrawer";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../store/store";
import {getCategoryById, setCategoryById} from "../../store/reducers/Products/ProductsReducer";
import {useParams} from "react-router-dom";
import {CategoryList} from "../../shared/types/CatalogTypes";

export default function Category() {
    let {category} = useParams();
    const dispatch = useDispatch()
    const [showSortByDrawer, setShowSortByDrawer] = useState(false)
    const [showFilterDrawer, setShowFilterDrawer] = useState(false)
    const categoryList = useSelector((state: RootState)=>getCategoryById(state))

    useEffect(()=> {
            dispatch(setCategoryById(category))
        }
        ,[])

    return <div className={styles.mainContainer}>
        <div className={styles.category}>
            <div className={styles.breadCrumbsBox}>
                <BreadCrumbs/>
            </div>
            {categoryList && <div className={styles.category__title}>Decking materials</div>}
            <div className={styles.category__filters}>
                <Button type={ButtonType.Blue} imageClassName='icon-filter' fontSize={16} text='Filters' click={()=> setShowFilterDrawer(true)}/>
                <Button text='Sort by' type={ButtonType.White} imageClassName='icon-sort' fontSize={16} click={()=> setShowSortByDrawer(true)}/>
            </div>
            <div className={styles.category__box}>
                {categoryList &&
                    (categoryList.items as CategoryList[]).map(
                        (itemArray, idx) => <div key={idx} className={styles.category__cards}>
                            <Card
                                urlKey={itemArray.url_key}
                                name={itemArray.name}
                                secondName={itemArray.sku}
                                price={itemArray.price_range.minimum_price.regular_price.value}
                            />
                        </div>
                    )
                }
            </div>
        </div>
        <FilterDrawer isOpen={showFilterDrawer} closeFn={()=> setShowFilterDrawer(false)}/>
        <SortByDrawer isOpen={showSortByDrawer} closeFn={()=> setShowSortByDrawer(false)}/>
    </div>
}