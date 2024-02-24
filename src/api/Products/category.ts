import axios from "axios";
import {CategoryTypes} from "../../shared/types/CatalogTypes";

export const loadProductsCategory = (id: string) => {
	let catalog:CategoryTypes | undefined;
	let data = JSON.stringify({
		query: `{
				products(
					filter: {
						category_uid: {eq: ${id}}
				}, pageSize: 200, sort: { name: DESC}) {
					total_count
					items {
						name
						sku
						url_key
						price_range {
							minimum_price {
								regular_price {
									value
									currency
								}
							}
						}
					}
					page_info {
						page_size
						current_page
					}
				}
			}`,
		variables: {}
	});

	let config = {
		method: 'post',
		maxBodyLength: Infinity,
		url: 'https://deckshop.com/graphql',
		headers: {
			'Content-Type': 'application/json',
			'Authorization': 'Bearer eyJraWQiOiIxIiwiYWxnIjoiSFMyNTYifQ.eyJ1aWQiOjQsInV0eXBpZCI6MiwiaWF0IjoxNzA4NzcxODA3LCJleHAiOjE3MDg3NzU0MDd9.h6a4Np4P9iGp5Pu815mAfUzIU8I-J4_D2EME0uFWHJY',
			'Cookie': 'PHPSESSID=c38e33c5bdc0714c6409f51a4182af9f; private_content_version=38704681a87032f43b76c8b70bb570f2'
		},
		data : data
	};

	axios.request(config)
			.then((response) => {
				catalog = response.data;
			})
			.catch((error) => {
				console.log(error);
			});
	return catalog
}
