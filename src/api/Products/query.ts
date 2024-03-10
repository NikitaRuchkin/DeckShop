import {ISort} from "../../pages/Category/Category";

export const categoryQuery = (id: string, search: ISort): string => {
	let sort: ISort | null | string = null

	if(String(search.name) === 'null' && String(search.price) == 'null') {
		sort = ``
	} else if (String(search.price) === 'null') {
		sort = `sort: {name:${search.name}}`
	} else if (String(search.name) === 'null') {
		sort = `sort: {price:${search.price}}`
	}

	return JSON.stringify({
		query: `{
    products(filter: { category_uid: { eq: "${id}" }} ${sort}) {
        items {
            id
            name
            price {
                regularPrice {
                    amount {
                        value
                    }
                }
            }
            manufacturer
            thumbnail {
                url
            }
            url_key
            url_path
            price_range {
                minimum_price {
                    regular_price {
                        value
                    }
                }
                maximum_price {
                    regular_price {
                        value
                    }
                }
            }
            small_image {
                url
                label
            }
            type_id
            stock_status
        }
        total_count
        aggregations {
            count
            label
            options {
                count
                value
                label
            }
            attribute_code
        }
    }
    customAttributeMetadata(
        attributes: [{ attribute_code: "manufacturer", entity_type: "catalog_product" }]
    ) {
        items {
            attribute_code
            attribute_options {
                label
                value
            }
        }
    }
}`,
		variables: {}
	});
}

export const catalogQuery = ()=> {
	return JSON.stringify({
		query: `{
        categories(filters: { ids: { eq: "3" } }) {
            items {
                id
                level
                path
                uid
                url_key
                url_path
                children {
                    id
                    name
                    url_key
                    url_path
                    uid
                    children {
                        id
                        name
                        uid
                        url_key
                        url_path
                    }
                }
                children_count
            }
        }
    }`,
		variables: {}
	});
}

export const productQuery = (url: string) => {
	return JSON.stringify({
		query: `{
            products(filter: { url_key: { eq: "${url}" } }) {
						items {
								id
								name
								length
								sku
								nominal_dimension
								product_collection
								trim
								manufacturer
								url_key
								url_path
								stock_status
								short_description {
										html
								}
								price {
										regularPrice {
												amount {
														value
												}
										}
								}
								image {
										url
										label
								}
								media_gallery {
										url
										label
								}
								small_image {
										label
										url
								}
								thumbnail {
										url
										label
								}
								type_id
						}
						total_count
				}
				customAttributeMetadata(
						attributes: [
								{ attribute_code: "length", entity_type: "catalog_product" }
								{ attribute_code: "nominal_dimension", entity_type: "catalog_product" }
								{ attribute_code: "product_collection", entity_type: "catalog_product" }
								{ attribute_code: "trim", entity_type: "catalog_product" }
								{ attribute_code: "manufacturer", entity_type: "catalog_product" }
						]
				) {
						items {
								attribute_code
								attribute_options {
										label
										value
								}
						}
				}
    }`,
		variables: {}
	});
}