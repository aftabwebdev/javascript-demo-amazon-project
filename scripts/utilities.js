export function query(selector) {
	return document.querySelector(selector);
}

export function queryAll(selector) {
	return document.querySelectorAll(selector);
}

export function money(priceCents) {
	return (priceCents / 100).toFixed(2);
}
