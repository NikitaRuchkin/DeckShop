export interface CartToken {
	"data": {
		"createEmptyCart": string
	}
	"errors": {
		message: string;
	}
}

export interface CartDataGet {
	"data": {
		"updateCartItems": {
			"cart": ICart
		}
	}
}

export interface CartData {
	"data": {
		"cart": ICart
	}
}

export interface CartDataRemove {
	"data": {
		removeItemFromCart: {
			"cart": ICart
		}
	}
}

export interface ICart {
	"items": Array<{
		"errors": null | { message: string },
		prices: {
			row_total: {
				value: number
			},
		}
		"quantity": number,
		"id": string,
		"product": {
			"image": {
				"label": string;
				"url": string;
			}
			"id": number,
			"name": string,
			"price": {
				"regularPrice": {
					"amount": {
						"value": number
					},
				}
			},
			"uid": string,
			"url_key": string
		}
	}>,
	"prices": {
		"applied_taxes": [],
		"grand_total": {
			"value": number
		},
		"subtotal_excluding_tax": {
			"value": number
		}
	},
	"total_quantity": number,
	"id": string
}

export interface IUpdateCart {
	"data": {
		"updateCartItems": {
			"cart": ICart
		}
	}
}
