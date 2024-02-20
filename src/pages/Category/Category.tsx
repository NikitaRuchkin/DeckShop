import styles from './Category.module.scss'
import Button from "../../components/button/Button";
import {ButtonType} from "../../shared/types/ButtonTypes";
import {Key, useState} from "react";
import Card from "../../components/card/Card";
import {data, preparedData} from "../../components/carousel/data";
import BreadCrumbs from "../../components/breadСrumbs/BreadCrumbs";
import FilterDrawer from "../../components/FilterDrawer/FilterDrawer";
import SortByDrawer from "../../components/SortByDrawer/SortByDrawer";

export default function Category() {
    const [products] = useState<any[]>(preparedData(data))
    const [showSortByDrawer, setShowSortByDrawer] = useState(false)
    const [showFilterDrawer, setShowFilterDrawer] = useState(false)

    return <div className={styles.mainContainer}>
        <div className={styles.category}>
            <div className={styles.breadCrumbsBox}>
                <BreadCrumbs/>
            </div>
            <div className={styles.category__title}>Decking materials</div>
            <div className={styles.category__filters}>
                <Button type={ButtonType.Blue} imageClassName='icon-filter' fontSize={16} text='Filters' click={()=> setShowFilterDrawer(true)}/>
                <Button text='Sort by' type={ButtonType.White} imageClassName='icon-sort' fontSize={16} click={()=> setShowSortByDrawer(true)}/>
            </div>
            <div className={styles.category__box}>
                {
                    products.map(
                        (itemArray, idx) => <div key={idx} className={styles.category__cards}>
                            {itemArray.map(
                                (item: { name: string | undefined; sku: string | undefined; price: number | undefined; }, index: Key | null | undefined) =>
                                    <Card name={item.name} secondName={item.sku} price={item.price} key={index}/>
                            )}
                        </div>
                    )
                }
            </div>
        </div>
        <FilterDrawer isOpen={showFilterDrawer} closeFn={()=> setShowFilterDrawer(false)}/>
        <SortByDrawer isOpen={showSortByDrawer} closeFn={()=> setShowSortByDrawer(false)}/>
    </div>
}