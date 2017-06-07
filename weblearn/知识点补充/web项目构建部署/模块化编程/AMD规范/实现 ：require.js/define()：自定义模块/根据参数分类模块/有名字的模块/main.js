require.config({
	paths:{
		'app':'js/app'
	}
})

requirejs(['app'],function(app){
	 app.m1();
	 app.m2()
})