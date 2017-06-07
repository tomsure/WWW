//alert(1)


require.config({
	
	paths:{
		'a':'js/a'
		
     }	
	
	
})

  require(['a'],function(re){
  	  alert(re.add())
  })

