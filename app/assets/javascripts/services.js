/**
 * Service's
 */

define(function() {
	
    return function( module ){

    		module.factory('HomeSrvc', function($http) {
	    		return function() {
					return {
						login : function(user){
						//console.log($http);
						    console.log('login click');
						    console.log(user);
						    $http({method : 'POST', url: 'login',data : user}).then(function(response){ console.log(response);},function(response){ console.log(response);});
						},
						logout : function(){
						    console.log('logout click');
 $http({method : 'POST', url: 'disconnect',data : user}).then(function(response){ console.log(response);},function(response){ console.log(response);});
						},
					    connect : function(code){
						console.log(code);
						$http({method : 'POST', 
						       url: 'connect?state='+code,
						       async : false }).then(function(response){},function(response){});
					    }
					}
	    		}
	    	})
    	
    };
    
});
