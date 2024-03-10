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
	data: {
		"products": {
			"items": Array<CategoryItems>,
			"total_count": number,
			"aggregations": Array<CategoryAggregation>
		},
		"customAttributeMetadata"?: {
			"items": [
				{
					"attribute_code": string,
					"attribute_options": [
						{
							"label": string,
							"value": string
						}
					]
				}
			]
		}
	}
}

export interface CategoryAggregation {
	"count": number,
	"label": string,
	"options": [
		{
			"count": number,
			"value": string,
			"label": string
		},
	],
	"attribute_code": string
}

export interface CategoryItems {
	"id": number,
	"name": string,
	"price": {
		"regularPrice": {
			"amount": {
				"value": number
			}
		}
	},
	"manufacturer": number,
	"thumbnail": {
		"url": string
	},
	"url_key": string,
	"url_path": null | string,
	"price_range": {
		"minimum_price": {
			"regular_price": {
				"value": number
			}
		},
		"maximum_price": {
			"regular_price": {
				"value": number
			}
		}
	},
	"small_image": {
		"url": string,
		"label": string
	},
	"type_id": string,
	"stock_status": string
}

export interface ProductByUrl {
	"data": {
		"errors"?: {
			message: string
		}
		"products"?: {
			"items": Array<
				{
					"id": number,
					"name": string,
					"sku": string,
					"length": number,
					"nominal_dimension": number,
					"product_collection": number,
					"trim": number,
					"manufacturer": number,
					"url_key": string,
					"url_path": null | string,
					"stock_status": string,
					"short_description": {
						"html": string
					},
					"price": {
						"regularPrice": {
							"amount": {
								"value": number
							}
						}
					},
					"image": {
						"url": string,
						"label": string
					},
					"media_gallery": [] | never,
					"small_image": {
						"label": string,
						"url": string
					},
					"thumbnail": {
						"url": string,
						"label": string
					},
					"type_id": string
				}
			>,
			"total_count": number
		},
		"customAttributeMetadata": {
			"items": Array<
				{
					"attribute_code": string,
					"attribute_options": Array<{
						"label": string,
						"value": string
					}>
				}
			>
		}
	}
}