export function fetchProductsAPI(getProducts) {
	fetch("https://aftabwebdev.github.io/products-api/products-api.json")
		.then((response) => {
			return response.ok ? response.json() : console.log("Not Successful!");
		})
		.then((data) => getProducts(data))
		.catch((err) => console.log(err.message));
}
