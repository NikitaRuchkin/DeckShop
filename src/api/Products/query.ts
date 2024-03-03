import {ISort} from "../../pages/Category/Category";

export const categoryQuery = (id: string, search: ISort): string => {
	return JSON.stringify({
		query: `{
    categories(filters: { url_key: { in: "${id}" } }) {
        items {
            id
            path
            uid
            url_key
            url_path
            products(sort: { price: ${search.price}, name: ${search.name} }) {
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
                    thumbnail {
                        url
                    }
                    url_key
                }
            }
            product_count
        }
    }
}`,
		variables: {}
	});
}

export const catalogQuery = ()=> {
	return JSON.stringify({
		query: `{
        categories(filters: { ids: { eq: "2" } }) {
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