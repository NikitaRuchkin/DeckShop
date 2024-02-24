import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {CatalogTypes} from "../../shared/types/CatalogTypes";

export const loadProductsCatalog = () => {
	let catalog:CatalogTypes | undefined;
	let data = JSON.stringify({
		query: `{
				categories(
					filters: {
						ids: {}
					}
					pageSize:3
					currentPage: 1
				) {
					total_count
					items {
						uid
						level
						name
						path
						url_key
						children_count
						children {
							uid
							level
							name
							url_key
							path
							children_count
						}
					}
					page_info {
						current_page
						page_size
						total_pages
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
