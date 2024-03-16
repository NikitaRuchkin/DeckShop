import {getCookieCart} from "../../shared/cookies/setCookie";
import {IUserInfoCheckout} from "./types";

export const SetShippingAddressesOnCart = ({
																				 city,
																				 email,
																				 country,
																				 addressLine,
																				 phone,
																				 lastName,
																				 firstName,
																				 postalCode,
																				 province
}:IUserInfoCheckout) => {
	const id = getCookieCart()
	return JSON.stringify({
		query: `mutation {
    setShippingAddressesOnCart(
        input: {
            cart_id: "${id}"
            shipping_addresses: {
                address: {
                    city: "${city}"
                    country_code: "CA"
                    firstname: "${firstName}"
                    lastname: "${lastName}"
                    postcode: "${postalCode}"
                    region: "${province}"
                    street: "${postalCode}"
                    telephone: "${phone}"
                }
            }
        }
    ) {
        cart {
            email
            available_payment_methods {
                title
                code
                is_deferred
            }
            id
            items {
                errors {
                    code
                    message
                }
                id
                prices {
                    row_total {
                        value
                    }
                }
                quantity
                uid
                product {
                    id
                    image {
                        url
                        label
                    }
                    manufacturer
                    name
                }
            }
            selected_payment_method {
                title
                code
            }
            shipping_addresses {
                available_shipping_methods {
                    amount {
                        value
                    }
                    available
                    carrier_code
                    carrier_title
                    error_message
                    method_code
                    method_title
                    price_excl_tax {
                        value
                    }
                }
                city
                company
                country {
                    code
                    label
                }
                firstname
                lastname
                postcode
                region {
                    code
                    label
                    region_id
                }
                selected_shipping_method {
                    amount {
                        value
                    }
                    carrier_code
                    carrier_title
                    method_code
                    method_title
                    price_excl_tax {
                        value
                    }
                }
                street
                telephone
                uid
            }
            total_quantity
        }
    }
}`,
		variables: {}
	});
}

export const SetGuestEmailOnCart = ({
																				 city,
																				 email,
																				 country,
																				 addressLine,
																				 phone,
																				 lastName,
																				 firstName,
																				 postalCode,
																				 province
																			 }:IUserInfoCheckout) => {
	const id = getCookieCart()
	return JSON.stringify({
		query: `mutation {
    setGuestEmailOnCart(
        input: { cart_id: "${id}", email: "${email}" }
    ) {
        cart {
            email
            available_payment_methods {
                title
                code
                is_deferred
            }
            id
            items {
                errors {
                    code
                    message
                }
                id
                prices {
                    row_total {
                        value
                    }
                }
                quantity
                uid
                product {
                    id
                    image {
                        url
                        label
                    }
                    manufacturer
                    name
                }
            }
            selected_payment_method {
                title
                code
            }
            shipping_addresses {
                available_shipping_methods {
                    amount {
                        value
                    }
                    available
                    carrier_code
                    carrier_title
                    error_message
                    method_code
                    method_title
                    price_excl_tax {
                        value
                    }
                }
                city
                company
                country {
                    code
                    label
                }
                firstname
                lastname
                postcode
                region {
                    code
                    label
                    region_id
                }
                selected_shipping_method {
                    amount {
                        value
                    }
                    carrier_code
                    carrier_title
                    method_code
                    method_title
                    price_excl_tax {
                        value
                    }
                }
                street
                telephone
                uid
            }
            total_quantity
        }
    }
}`,
		variables: {}
	});
}