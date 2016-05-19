(function(){
	
	var app = angular.module('store', []);
	var gem = {
		name : "Dodecahedron",
		price:2.96,
		description: "I don't know what is it"
	};
	
	app.controller('StoreController', function(){
		this.product = gem;
	});

})();