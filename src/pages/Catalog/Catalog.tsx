import CatalogCards from "../../components/catalogCards/CatalogCards";
import styles from './Catalog.module.scss'
import BreadCrumbs from "../../components/breadСrumbs/BreadCrumbs";
import {CatalogChildren, CatalogTypes} from "../../shared/types/CatalogTypes";
import {useGetCatalogQuery} from "../../api/Products/api";
import {catalogQuery} from '../../api/Products/query'

export default function Catalog() {
    const {data, isLoading, error} = useGetCatalogQuery(catalogQuery())
    
    return <div className={styles.mainContainer}>
        <div className={styles.catalogBox}>
            <div className={styles.breadCrumbsContainer}>
                <BreadCrumbs/>
            </div>
            {isLoading? <div>Loading...</div>
            :
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
            }
        </div>
    </div>
}