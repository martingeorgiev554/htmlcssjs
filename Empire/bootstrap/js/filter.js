$(function() {


let products = [{
			name: "Coctail Margarita",
			img: "img1.jpg",
			description: " Margarita is a cocktail made with tequila, cointreau, fresh lime."
		},
		{
			name: "Coctail Mai Tai",
			img: "img2.jpg",
			description: " Mai Tai is a cocktail made with white rom, dark rom, triple sec, sugar, grenadin, fresh lemon."
		},
		{
			name: "Coctail Negroni",
			img: "img3.jpg",
			description: " Negroni is a cocktail made with gin, sweet vermouth and campari."
		},
		{
			name: "Coctail Old Fashion",
			img: "img4.jpg",
			description: " Old Fashion is a cocktail made with bourbon, angostura bitters, orange peel and maraschino cherry."
		},
		{
			name: "Coctail Blue Lagoon",
			img: "img5.jpg",
			description: " Blue Lagoon is a cocktail made with vodka, fresh lemon and blue Curacao."	
		},
		{
			name: "Coctail Manhattan",
			img: "img6.jpg",
			description: "A Manhattan is a cocktail made with whiskey, sweet vermouth and bitters."	
		},
		{
			name: "Coctail Mojito",
			img: "img7.jpg",
			description: " Mojito is a cocktail made with white rom, brown sugar, lime, mint leaves and sparkling water."
		},
		{
			name: "Coctail Cosmopolitan",
			img: "img8.jpg",
			description: " Cosmopolitan is a cocktail made with vodka, cointreau, juice of blueberries and little lime fresh."
		},
		{
			name: "Coctail Varadero",
			img: "img9.jpg",
			description: " Varadero is a cocktail made with vodka, melon liqueur, passoa, pineapple juice and orange juice."
		},
		{
			name: "Gin Martini",
			img: "img10.jpg",
			description: " Simple coctail with Gin n Martini Dry."
		},
		{
			name: "Bar Menu",
			img: "menu.jpg",
			description: " "
		},
		{
			name: "Empire Bar Card",
			img: "img11.png",
			description: "There is only one place for soulmates!"
		},


	];

	let $products = $("#products");
	$("#products").addClass("classproducts");
	appendProducts(products);
	
	function appendProducts(products) {
		$products.html(" ");
		for (let i = 0; i < products.length; i++) {
			let currentElement = products[i];
			let htmlProduct = createProductsHtml(currentElement);
			$products.append(htmlProduct);
		}
	}

	function createProductsHtml(product) {

		let result = $("<div class='product-item col-4'>");
		let heading = $("<h3 class='product-name'>").text(product.name);
		let productImg = $("<img src='bootstrap/coctails/" + product.img + "'>");
		let desc = $("<p class='desc'>").text(product.description);
		$(result).append(heading).append(productImg).append(desc);
		return result;
	}

	$("#searchForm").submit(function(e) {
		e.preventDefault();
		
		let matches = [];
		let searchText = $('#searchText').val();
		for (let i = 0; i < products.length; i++) {
			let currentProduct = products[i];
			let nameToLower = currentProduct.name.toLowerCase();
			let isMatch = nameToLower.indexOf(searchText) >= 0;
			if(isMatch) {
				matches.push(currentProduct)
			};
		};
		appendProducts(matches);
	})

});




