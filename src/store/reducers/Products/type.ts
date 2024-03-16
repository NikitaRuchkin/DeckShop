import {CatalogTypes, CategoryTypes} from "../../../shared/types/CatalogTypes";

export interface ProductCatalog {
	ProductCatalog: CatalogTypes | '';
	Category: CategoryTypes | '';
	Card: '';
	quantity: number;
}