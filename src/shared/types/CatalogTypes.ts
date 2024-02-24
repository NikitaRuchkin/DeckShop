export interface CatalogTypes {
	total_count: number;
	items: CategoryItems[];
	page_info: PageInfo;
}

export interface CategoryTypes {
	total_count: number;
	items: CategoryList[];
	page_info: PageInfo;
}

export interface CategoryItems {
	uid: string;
	level: number;
	name: string;
	path: string;
	url_key: string | null;
	children_count: string;
	children?: Omit<CategoryItems, 'children'>[];
}

export interface CategoryList {
	"name": string,
	"sku": string,
	"url_key": string,
	"price_range": {
		"minimum_price": {
			"regular_price": {
				"value": number,
				"currency": string
			}
		}
	}
}

interface PageInfo {
	current_page: number;
	page_size: number;
	total_pages?: number;
}