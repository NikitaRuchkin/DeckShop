export function getCookieAuth() {
	let arrayCookies = document.cookie.split(';')
	let getCookieString = arrayCookies.find((x)=> x.includes('auth'))
	if (getCookieString) {
		return getCookieString.split('=')[1]
	} else {
		return ''
	}
}

export function getCookieCart() {
	let arrayCookies = document.cookie.split(';')
	let getCookieString = arrayCookies.find((x)=> x.includes('cart'))
	if (getCookieString) {
		return getCookieString.split('=')[1]
	} else {
		return ''
	}
}