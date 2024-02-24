import {createSlice} from '@reduxjs/toolkit'
import {loadProductsCatalog} from '../../../api/Products/products'
import {RootState} from '../../store'
import {ProductCatalog} from './type'

const temporaryDataCatalog = {
	"data": {
		"categories": {
			"total_count": 12,
			"items": [
				{
					"uid": "Mg==",
					"level": 1,
					"name": "Default Category",
					"path": "1/2",
					"url_key": null,
					"children_count": "3",
					"children": [
						{
							"uid": "Mw==",
							"level": 2,
							"name": "Lumber",
							"url_key": "lumber",
							"path": "1/2/3",
							"children_count": "2"
						},
						{
							"uid": "OA==",
							"level": 2,
							"name": "Lighting",
							"url_key": "lighting",
							"path": "1/2/8",
							"children_count": "0"
						},
						{
							"uid": "OQ==",
							"level": 2,
							"name": "Hardware",
							"url_key": "hardware",
							"path": "1/2/9",
							"children_count": "0"
						}
					]
				},
				{
					"uid": "Mw==",
					"level": 2,
					"name": "Lumber",
					"path": "1/2/3",
					"url_key": "lumber",
					"children_count": "2",
					"children": [
						{
							"uid": "Ng==",
							"level": 3,
							"name": "Dimensional Lumber",
							"url_key": "dimensional-lumber",
							"path": "1/2/3/6",
							"children_count": "1"
						},
						{
							"uid": "Nw==",
							"level": 3,
							"name": "Decking Lumber",
							"url_key": "decking-lumber",
							"path": "1/2/3/7",
							"children_count": "5"
						}
					]
				},
				{
					"uid": "Ng==",
					"level": 3,
					"name": "Dimensional Lumber",
					"path": "1/2/3/6",
					"url_key": "dimensional-lumber",
					"children_count": "1",
					"children": [
						{
							"uid": "MTA=",
							"level": 4,
							"name": "Pressure Treated",
							"url_key": "pressure-treated",
							"path": "1/2/3/6/10",
							"children_count": "0"
						}
					]
				}
			],
			"page_info": {
				"current_page": 1,
				"page_size": 3,
				"total_pages": 4
			}
		}
	}
}
const temporaryDataCategory = {
	"data": {
		"products": {
			"total_count": 144,
			"items": [
				{
					"name": "Woodland Brown Riser 1x8x12'",
					"sku": "TXWBRISER",
					"url_key": "island-mist-riser-1x8x12-57",
					"price_range": {
						"minimum_price": {
							"regular_price": {
								"value": 100,
								"currency": "USD"
							}
						}
					}
				},
				{
					"name": "Woodland Brown 1x6x12'",
					"sku": "TXWB12SQ",
					"url_key": "island-mist-riser-1x8x12-55",
					"price_range": {
						"minimum_price": {
							"regular_price": {
								"value": 100,
								"currency": "USD"
							}
						}
					}
				},
				{
					"name": "Woodland Brown",
					"sku": "TXWBCORTEX",
					"url_key": "island-mist-riser-1x8x12-56",
					"price_range": {
						"minimum_price": {
							"regular_price": {
								"value": 100,
								"currency": "USD"
							}
						}
					}
				},
				{
					"name": "Winchester Gray Riser 1x8x12'",
					"sku": "TXWGRISER",
					"url_key": "island-mist-riser-1x8x12-62",
					"price_range": {
						"minimum_price": {
							"regular_price": {
								"value": 100,
								"currency": "USD"
							}
						}
					}
				},
				{
					"name": "Winchester Gray Fascia 1x12x12'",
					"sku": "TXWGFASCIA",
					"url_key": "island-mist-riser-1x8x12-61",
					"price_range": {
						"minimum_price": {
							"regular_price": {
								"value": 100,
								"currency": "USD"
							}
						}
					}
				},
				{
					"name": "Winchester Gray 1x6x20'",
					"sku": "TXWG20SQ",
					"url_key": "island-mist-riser-1x8x12-59",
					"price_range": {
						"minimum_price": {
							"regular_price": {
								"value": 100,
								"currency": "USD"
							}
						}
					}
				},
				{
					"name": "Winchester Gray 1x6x16'",
					"sku": "TXWG16SQ",
					"url_key": "island-mist-riser-1x8x12-58",
					"price_range": {
						"minimum_price": {
							"regular_price": {
								"value": 100,
								"currency": "USD"
							}
						}
					}
				},
				{
					"name": "Weathered Ipe 1x6x16'",
					"sku": "WFWI16SQ",
					"url_key": "amberwood-1x6x12-34",
					"price_range": {
						"minimum_price": {
							"regular_price": {
								"value": 100,
								"currency": "USD"
							}
						}
					}
				},
				{
					"name": "Weathered Ipe 1x6x12'",
					"sku": "WFWI12SQ",
					"url_key": "amberwood-1x6x12-33",
					"price_range": {
						"minimum_price": {
							"regular_price": {
								"value": 100,
								"currency": "USD"
							}
						}
					}
				},
				{
					"name": "Universal Riser White 1x8x12'",
					"sku": "TXWHTRISER",
					"url_key": "island-mist-riser-1x8x12-64",
					"price_range": {
						"minimum_price": {
							"regular_price": {
								"value": 100,
								"currency": "USD"
							}
						}
					}
				},
				{
					"name": "Universal Fascia White 1x12x12'",
					"sku": "TXWHTFASCIA",
					"url_key": "island-mist-riser-1x8x12-63",
					"price_range": {
						"minimum_price": {
							"regular_price": {
								"value": 100,
								"currency": "USD"
							}
						}
					}
				},
				{
					"name": "Toasted Sand Fascia 1x12x12'",
					"sku": "TXTSFASCIA",
					"url_key": "island-mist-riser-1x8x12-50",
					"price_range": {
						"minimum_price": {
							"regular_price": {
								"value": 100,
								"currency": "USD"
							}
						}
					}
				},
				{
					"name": "Toasted Sand 1x6x20'",
					"sku": "TXTS20SQ",
					"url_key": "island-mist-riser-1x8x12-49",
					"price_range": {
						"minimum_price": {
							"regular_price": {
								"value": 100,
								"currency": "USD"
							}
						}
					}
				},
				{
					"name": "Toasted Sand 1x6x20'",
					"sku": "TXTS20GR",
					"url_key": "island-mist-riser-1x8x12-48",
					"price_range": {
						"minimum_price": {
							"regular_price": {
								"value": 100,
								"currency": "USD"
							}
						}
					}
				},
				{
					"name": "Toasted Sand 1x6x16'",
					"sku": "TXTS16SQ",
					"url_key": "island-mist-riser-1x8x12-47",
					"price_range": {
						"minimum_price": {
							"regular_price": {
								"value": 100,
								"currency": "USD"
							}
						}
					}
				},
				{
					"name": "Toasted Sand 1x6x16'",
					"sku": "TXTS16GR",
					"url_key": "island-mist-riser-1x8x12-46",
					"price_range": {
						"minimum_price": {
							"regular_price": {
								"value": 100,
								"currency": "USD"
							}
						}
					}
				},
				{
					"name": "Toasted Sand 1x6x12'",
					"sku": "TXTS12SQ",
					"url_key": "island-mist-riser-1x8x12-45",
					"price_range": {
						"minimum_price": {
							"regular_price": {
								"value": 100,
								"currency": "USD"
							}
						}
					}
				},
				{
					"name": "Toasted Sand 1x6x12'",
					"sku": "TXTS12GR",
					"url_key": "island-mist-riser-1x8x12-44",
					"price_range": {
						"minimum_price": {
							"regular_price": {
								"value": 100,
								"currency": "USD"
							}
						}
					}
				},
				{
					"name": "Tiki Torch 1x6x16'",
					"sku": "TXTT16SQ",
					"url_key": "island-mist-riser-1x8x12-52",
					"price_range": {
						"minimum_price": {
							"regular_price": {
								"value": 100,
								"currency": "USD"
							}
						}
					}
				},
				{
					"name": "Tiki Torch 1x6x12'",
					"sku": "TXTT12GR",
					"url_key": "island-mist-riser-1x8x12-51",
					"price_range": {
						"minimum_price": {
							"regular_price": {
								"value": 100,
								"currency": "USD"
							}
						}
					}
				}
			],
			"page_info": {
				"page_size": 20,
				"current_page": 1
			}
		}
	}
}
const temporaryDataCard = {
	"data": {
		"products": {
			"total_count": 1,
			"items": [
				{
					"name": "Woodland Brown Riser 1x8x12'",
					"sku": "TXWBRISER",
					"url_key": "island-mist-riser-1x8x12-57",
					"price_range": {
						"minimum_price": {
							"regular_price": {
								"value": 100,
								"currency": "USD"
							}
						}
					}
				}
			],
			"page_info": {
				"page_size": 20,
				"current_page": 1
			}
		}
	}
}

const initialState: ProductCatalog = {
	ProductCatalog: '',
	Category: '',
	Card: ''
}

export const ProductsReducer = createSlice({
	name: 'ProductsSlice',
	initialState,
	reducers: {

		setProducts: (state) => {
			//TODO uncommit request
			// state.ProductCatalog = loadProductsCatalog()
			state.ProductCatalog = temporaryDataCatalog.data.categories
		},

		setCategoryById: (state, payload) => {
			//TODO uncommit request
			// state.Category = loadProductsCategory(payload)
			state.Category = temporaryDataCategory.data.products
		},

		setCardById: (state, payload) => {
			//TODO uncommit request
			// state.Card = loadProductsCategory(payload)
			state.Card = temporaryDataCard.data.products.items[0]
		},
	},
})

export const { setProducts, setCategoryById, setCardById } = ProductsReducer.actions
export const getProducts = (state:RootState)  => state.ProductsReducer.ProductCatalog
export const getCategoryById = (state:RootState)  => state.ProductsReducer.Category
export const getCardById = (state:RootState)  => state.ProductsReducer.Card
export default ProductsReducer.reducer