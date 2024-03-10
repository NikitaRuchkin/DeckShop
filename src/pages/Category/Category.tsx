import styles from './Category.module.scss'
import Button from "../../components/button/Button";
import {ButtonType} from "../../shared/types/ButtonTypes";
import {useState} from "react";
import Card from "../../components/card/Card";
import BreadCrumbs from "../../components/breadСrumbs/BreadCrumbs";
import FilterDrawer from "../../components/FilterDrawer/FilterDrawer";
import SortByDrawer from "../../components/SortByDrawer/SortByDrawer";
import {useParams, useSearchParams} from "react-router-dom";
import {CategoryTypes} from "../../shared/types/CatalogTypes";
import {useGetCategoryQuery} from "../../api/Products/api";
import {categoryQuery} from "../../api/Products/query";
import CategoryLoader from "../../components/Loaders/CategoryLoader/CategoryLoader";

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
            search.price = searchParams.get('price')
        }
        return search
    }

    const [showSortByDrawer, setShowSortByDrawer] = useState(false)
    const [showFilterDrawer, setShowFilterDrawer] = useState(false)
    const [sort, setSort] = useState<ISort>(getSearchParams())
    const {data, isFetching} = useGetCategoryQuery(categoryQuery((category as string), sort))

    const setSortAndCloseModal = (sort: ISort)=> {
        if (sort) {
            setSort(sort)
            setSearchParams(`name=${sort.name}&price=${sort.price}`)
        }
        setShowSortByDrawer(false)
    }

    //TODO use small_image for image
    return <div className={styles.mainContainer}>
        {isFetching? <div><CategoryLoader/></div>
          :
          (<div className={styles.category}>
            <div className={styles.breadCrumbsBox}>
                <BreadCrumbs/>
            </div>
              <div>
                  {/*{data && <div className={styles.category__title}>{(data.data as CategoryTypes).categories.items[0].url_key}</div>}*/}
                  <div className={styles.category__filters}>
                      <Button type={ButtonType.Blue} imageClassName='icon-filter' fontSize={16} text='Filters' click={()=> setShowFilterDrawer(true)}/>
                      <Button text='Sort by' type={ButtonType.White} imageClassName='icon-sort' fontSize={16} click={()=> setShowSortByDrawer(true)}/>
                  </div>
                  <div className={styles.category__box}>
                      {data && data.data.products && data.data.products.items.map(
                        (itemCard, index)=><div key={index} className={styles.category__cards}>
                            <Card
                              images={itemCard.small_image.url}
                              category={category}
                              urlKey={itemCard.url_key}
                              name={itemCard.name}
                              secondName={itemCard.url_key}
                              price={itemCard.price.regularPrice.amount.value}
                            />
                        </div>
                      )}
                  </div>
              </div>
          </div>
          )}
        <FilterDrawer isOpen={showFilterDrawer} closeFn={()=> setShowFilterDrawer(false)}/>
        <SortByDrawer isOpen={showSortByDrawer} closeFn={()=> setShowSortByDrawer(false)} setSortCategory={setSortAndCloseModal}/>
    </div>
}