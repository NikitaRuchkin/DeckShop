import {ISort} from "../../pages/Category/Category";

export const categoryQuery = (id: string, search: ISort): string => {
	let sort: ISort | null | string = null

	if(String(search.name) === 'null' && String(search.price) == 'null') {
		sort = ``
	} else if (String(search.price) === 'null') {
		sort = `(sort: {name:${search.name}})`
	} else if (String(search.name) === 'null') {
		sort = `(sort: {price:${search.price}})`
	}
	return JSON.stringify({
		query: `{
    categories(filters: { url_key: { in: "${id}" } }) {
        items {
            id
            path
            uid
            url_key
            url_path
            products${sort} {
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