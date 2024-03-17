export interface IFormRegisterValues {
	firstName: string;
	lastName: string;
	phone: number | string;
	email: string;
	password: string;
	confirmPassword: string;
}

export interface IFormRegisterValuesResponse {
	data: {
		customer: {
		email: string;
		firstname: string;
		lastname: string;
		id: string;
		}
	}
}

export interface IFormEmailValid {
	data: {
		"isEmailAvailable": {
			"is_email_available": boolean
		}
	}
}

export interface IFormCheckMail {
	data:	{
		createCustomerV2: null,
	},
	createCustomerV2:	null,
	errors:	[{message: "A customer with the same email address already exists in an associated website."}]
}