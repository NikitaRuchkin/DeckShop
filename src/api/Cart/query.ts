import {getCookieCart} from "../../shared/cookies/setCookie";

export const cartTokenQuery = () => {
	return JSON.stringify({
			query: `mutation CreateEmptyCart {
			createEmptyCart
		}`,
		variables: {}
	});
}

export const cartGetDataQuery = () => {
	return JSON.stringify({
		query: `{
    cart(cart_id: "${getCookieCart()}") {
        items {
            errors {
                code
                message
            }
            prices {
               row_total {
                   value
               }
            },
            quantity
            id
            product {
                image {
                  label
                  url
                },
                id
                name
                price {
                    regularPrice {
                        amount {
                            value
                        }
                    }
                }
                uid
                url_key
            }
        }
        prices {
            applied_taxes {
                amount {
                    value
                }
            }
            grand_total {
                value
            }
            subtotal_excluding_tax {
                value
            }
        }
        total_quantity
        id
    }
}`,
		variables: {}
	});
}

export const addSingleConfigurableProductToCartQuery = (sku: string, quantity: number) => {
	const id = getCookieCart()
	return JSON.stringify({
		query: `mutation {
    addProductsToCart(
        cartId: "${id}"
        cartItems: [{ sku: "${sku}", quantity: ${quantity} }]
    ) {
        cart {
                total_quantity
        			}
    }
}`,
		variables: {}
	});
}

export const removeItemFromCartQuery = (itemId: number) => {
	const id = getCookieCart()
	return JSON.stringify({
		query: `mutation {
    removeItemFromCart(
        input: { cart_id: "${id}", cart_item_id: ${itemId} }
    ) {
        cart {
            id
            items {
                 prices {
                    row_total {
                       value
                    }
                 },
                id
                quantity
                prices {
                    row_total {
                        value
                    }
                }
                product {
                    image {
                  		label
                  		url
                		},
                    id
                    manufacturer
                    name
                    image {
                        url
                        label
                    }
                }
            }
            prices {
                applied_taxes {
                    label
                    amount {
                        value
                    }
                }
                grand_total {
                    value
                }
                subtotal_excluding_tax {
                    value
                }
            }
            total_quantity
        }
    }
}`,
		variables: {}
	});
}

export const updateCartItemsQuery = (itemId: number, quantity: number) => {
	const id = getCookieCart()
	return JSON.stringify({
		query: `mutation {
    updateCartItems(
        input: {
            cart_id: "${id}"
            cart_items: { cart_item_id: ${itemId}, quantity: ${quantity} }
        }
    ) {
        cart {
            id
            total_quantity
            items {
                 prices {
                    row_total {
                        value
                    }
                 },
                errors {
                    code
                    message
                }
                id
                prices {
                    price {
                        value
                    }
                    row_total {
                        value
                    }
                }
                quantity
                product {
                    image {
                  		label
                  		url
                		},
                    id
                    name
                    url_key
                    price {
                        regularPrice {
                            amount {
                                currency
                                value
                            }
                        }
                    }
                }
                uid
            }
            prices {
                applied_taxes {
                    label
                    amount {
                        value
                    }
                }
                grand_total {
                    value
                }
                subtotal_excluding_tax {
                    value
                }
            }
        }
    }
}`,
		variables: {}
	});
}