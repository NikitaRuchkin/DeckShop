import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const loadProductsCatalog = createAsyncThunk(
		"post/loadUser",
		async () => {
			const response = await axios.post("https://api.somelink.com/graphql", {
				query: `
        query ($userId: uuid!) {
          users(where: {id: {_eq: $userId}}) {
            name
            email
          }
        }
      `,
				variables: {
					userId: "user-12345",
				},
			});
			return response;
		}
);