/** @type {import('./$types').RequestHandler} */
export async function GET() {
	var returnData;
	const res = await fetch(
		'https://www.tacobell.com/tacobellwebservices/v2/tacobell/products/menu/0000',
		{
			referrerPolicy: 'strict-origin-when-cross-origin',
			body: null,
			method: 'GET'
		}
	);
	const item = await res.json();

	item.menuProductCategories.forEach((element) => {
		element.products.forEach((product) => {
			returnData = product;
		});
	});

	console.log(returnData);

	
	return new Response(JSON.stringify(returnData));
}
