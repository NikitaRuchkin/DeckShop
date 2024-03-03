import styles from './Category.module.scss'
import Button from "../../components/button/Button";
import {ButtonType} from "../../shared/types/ButtonTypes";
import {useState} from "react";
import Card from "../../components/card/Card";
import BreadCrumbs from "../../components/breadСrumbs/BreadCrumbs";
import FilterDrawer from "../../components/FilterDrawer/FilterDrawer";
import SortByDrawer from "../../components/SortByDrawer/SortByDrawer";
import {useNavigate, useParams, useSearchParams} from "react-router-dom";
import {CategoryTypes} from "../../shared/types/CatalogTypes";
import {useGetCategoryQuery} from "../../api/Products/api";
import {categoryQuery} from "../../api/Products/query";

export interface ISort {
    name: null | string,
    price: null | string
}

export default function Category() {
    let {category} = useParams();
    let [searchParams, setSearchParams] = useSearchParams();
    const getSearchParams = ():ISort => {
        const search: ISort = {
            name: null,
            price: null,
        }
        if (searchParams.get('name')) {
            search.name = searchParams.get('name')
        }
        if (searchParams.get('price')) {
            search.name = searchParams.get('name')
        }
        return search
    }
    const [showSortByDrawer, setShowSortByDrawer] = useState(false)
    const [showFilterDrawer, setShowFilterDrawer] = useState(false)
    const [sort, setSort] = useState<ISort>(getSearchParams())
    const {data, isLoading, error} = useGetCategoryQuery(categoryQuery((category as string), sort))
    
    const setSortAndCloseModal = (sort: ISort)=> {
        if (sort) {
            setSort(sort)
            setSearchParams(`name=${sort.name}&price=${sort.price}`)
        }
        setShowSortByDrawer(false)
    }
    
    return <div className={styles.mainContainer}>
        <div className={styles.category}>
            <div className={styles.breadCrumbsBox}>
                <BreadCrumbs/>
            </div>
            {isLoading? <div>Loading...</div>
              :
              <div>
                  {data && <div className={styles.category__title}>{(data.data as CategoryTypes).categories.items[0].url_key}</div>}
                  <div className={styles.category__filters}>
                      <Button type={ButtonType.Blue} imageClassName='icon-filter' fontSize={16} text='Filters' click={()=> setShowFilterDrawer(true)}/>
                      <Button text='Sort by' type={ButtonType.White} imageClassName='icon-sort' fontSize={16} click={()=> setShowSortByDrawer(true)}/>
                  </div>
                  <div className={styles.category__box}>
                      {data &&
                        (data.data as CategoryTypes).categories.items.map(
                          (itemArray, idx) => <div>{itemArray.products.items.map(
                            (itemCard)=><div key={idx} className={styles.category__cards}>
                                <Card
                                  category={(data.data as CategoryTypes).categories.items[0].url_key}
                                  urlKey={itemCard.url_key}
                                  name={itemCard.name}
                                  secondName={itemCard.url_key}
                                  price={itemCard.price.regularPrice.amount.value}
                                />
                            </div>
                          )}</div>
                        )
                      }
                  </div>
              </div>}
        </div>
        <FilterDrawer isOpen={showFilterDrawer} closeFn={()=> setShowFilterDrawer(false)}/>
        <SortByDrawer isOpen={showSortByDrawer} closeFn={()=> setShowSortByDrawer(false)} setSortCategory={setSortAndCloseModal}/>
    </div>
}