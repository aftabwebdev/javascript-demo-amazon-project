export let cart = JSON.parse(localStorage.getItem("cart")) || [];

export function localStorageCart() {
	localStorage.setItem("cart", JSON.stringify(cart));
}

export function calculateCartTotal() {
	let total = 0;
	cart.forEach((cartItem) => {
		total += cartItem.quantity;
	});
	return total;
}
