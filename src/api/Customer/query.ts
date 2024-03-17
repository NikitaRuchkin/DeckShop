import {IFormRegisterValues} from "./type";

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

export const createUserAccQuery = ({firstName, lastName, password, email}:IFormRegisterValues) => {
	return JSON.stringify({
		query: `mutation {
        createCustomerV2(
		input: {
		firstname: "${firstName}"
		lastname: "${lastName}"
		email: "${email}"
		password: "${password}"
	}
) {
		customer {
			email
			firstname
			lastname
			id
		}
	}
    }`,
		variables: {}
	});
}

export const createUserEmailQuery = ({firstName, lastName, password, email}:IFormRegisterValues) => {
	return JSON.stringify({
		query: ` {
        IsEmailAvailable {
					isEmailAvailable(email: "${email}") {
						is_email_available
				}
			}
    }`,
		variables: {}
	});
}