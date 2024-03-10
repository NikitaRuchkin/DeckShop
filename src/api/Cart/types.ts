export interface CartToken {
	"data": {
		"createEmptyCart": string
	}
	"errors": {
		message: string;
	}
}

export interface CartData {
	"data": {
		"cart": {
			"items": Array<{
				"errors": null | {message: string},
				"quantity": number,
				"id": string,
				"product": {
					"id": number,
					"name": string,
					"price": {
						"regularPrice": {
							"amount": {
								"value": number
							}
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
	}
}