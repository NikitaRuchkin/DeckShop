export interface IUserInfoCheckout {
	email: string;
	firstName: string;
	lastName: string;
	country: string;
	city: string;
	postalCode: string;
	province: string;
	addressLine: string;
	phone: string;
	password?: string;
}