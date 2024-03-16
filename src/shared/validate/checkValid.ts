export const checkValid = {
	positive: (v:string | number) => v === ''? 'Field is empty' : true,
	checkEmptyField: (v:string) => v.trim() === ''? 'Field is empty' : true,
}
