(function(){
	
	var app = angular.module('store', []);
	var gems = [
		{
			name : "Dodecahedron",
			price:2.96,
			description: "I don't know what is it"
		},
		{ name: 'Azurite', price: 2.95 ,description: 'Azurite'},
    	{ name: 'Bloodstone', price: 5.95, description: 'Bloodstone' },
    	{ name: 'Zircon', price: 3.95,description: 'Zircon' }
	];
	
	app.controller('StoreController', function(){
		this.products = gems;
	});

})();