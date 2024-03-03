import CatalogCards from "../../components/catalogCards/CatalogCards";
import styles from './Catalog.module.scss'
import BreadCrumbs from "../../components/breadСrumbs/BreadCrumbs";
import {CatalogChildren, CatalogTypes} from "../../shared/types/CatalogTypes";
import {useGetCatalogQuery} from "../../api/Products/api";
import {catalogQuery} from '../../api/Products/query'
import CatalogLoader from "../../components/Loaders/CatalogLoader/CatalogLoader";
import {useEffect} from "react";

export default function Catalog() {
    const {data, isFetching, error} = useGetCatalogQuery(catalogQuery())
    
    return <div className={styles.mainContainer}>
        {isFetching? <div><CatalogLoader/></div>
          :
        <div className={styles.catalogBox}>
            <div className={styles.breadCrumbsContainer}>
                <BreadCrumbs/>
            </div>
              <div>
                  {data && <div className={styles.catalogMargin}>
                      {(data.data.categories as CatalogTypes).items.map(
                        (item)=> <div key={item.id}>
                            {item.children.map(
                              (child)=> <div className={styles.catalogMiddleMargin} key={child.uid}>
                                  <CatalogCards text={child.name} cards={child.children as CatalogChildren[]}/>
                              </div>
                            )}
                        </div>
                      )}
                  </div>
                  }
              </div>
        </div>
        }
    </div>
}