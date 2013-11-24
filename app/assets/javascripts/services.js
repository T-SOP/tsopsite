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
						    $http({method : 'POST', url: 'login',data : user})
							.then(function(data,status,headers,config){ 
							   		window.location = window.location.href;
									console.log(status);
							},function(data,status,headers,config){
							   		window.location = window.location.href;
									console.log(status);
							});
						},
						logout : function(){
						    console.log('logout click');
 $http({method : 'POST', url: 'disconnect'}).then(function(response){ console.log(response);},function(response){ console.log(response);});
						},
					    connect : function(code){
						console.log(code);
						var codeData = {};
						codeData['code'] = code;
						$http({method : 'POST', 
						       url: 'connect?state='+ document.getElementById('state').value ,
						       async : false,data:codeData}).then(function(response){
							   		window.location = window.location.href;
							   },function(response){
							   		console.log(response);
							   		window.location = window.location.href;
							   });
					    }
					}
	    		}
	    	})
    	
    };
    
});
