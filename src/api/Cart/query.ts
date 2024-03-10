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
            quantity
            id
            product {
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
            id
            items {
                id
                quantity
                uid
            }
            prices {
                applied_taxes {
                    amount {
                        value
                    }
                    label
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
        user_errors {
            code
            message
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
                id
                quantity
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
            total_quantity
        }
    }
}`,
		variables: {}
	});
}