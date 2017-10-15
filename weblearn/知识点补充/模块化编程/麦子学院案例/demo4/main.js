require.config({
	
	paths:{
		a:"js/a",
		c:"js/c",
		b:"js/b"

	},
	shim:{
		b:{
			exports:"b"
		}
	}

})

require(["a","c"],function(a,c){
	c.helloc();


})
