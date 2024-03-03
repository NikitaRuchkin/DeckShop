export interface CatalogTypes {
	items: CatalogItems[];
}

export interface CatalogItems {
	"id": number | null,
	"level": number | null,
	"path": string | null,
	"uid": string | null,
	"url_key": string | null,
	"url_path": string | null,
	children_count: string | null,
	children: Array <{
		"id": number | null,
		"name": string | null,
		"url_key": string | null,
		"url_path": string | null,
		"uid": string | null,
		children: Omit<CatalogChildren, 'children'>[];
	}>;
}

export interface CatalogChildren {
	"id": number | null,
	"name": string | null,
	"url_key": string | null,
	"url_path": string | null,
	"uid": string | null,
	children: Omit<CatalogChildren, 'children'>[];
}


export interface CategoryTypes {
	"categories": {
		"items": Array<{
			"id": number | null,
			"path": string | null,
			"uid": string | null,
			"url_key": string | null,
			"url_path": string | null,
			"products": {
				items: Array<CategoryItems>
			},
			"product_count": number | null;
		}>
	}
}

export interface CategoryItems {
	"id": number,
	"name": string,
	"price": {
		"regularPrice": {
			"amount": {
				"value": number;
			}
		}
	},
	"thumbnail": {
		"url": string;
	},
	"url_key": string;
}