export const getCustomerToken = (email: string, password: string)=> {
	return JSON.stringify({
		query: `mutation {
        generateCustomerToken(
					email: "${email}"
					password: "${password}"
  			) {
    			token
  			}
    }`,
		variables: {}
	});
}