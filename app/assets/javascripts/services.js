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
							   		window.location.reload();
									console.log(status);
							},function(data,status,headers,config){
							   		window.location.reload();
									console.log(status);
							});
						},
						logout : function(){
						    console.log('logout click');
 $http({method : 'POST', url: 'disconnect'}).
						then(function(data,status,headers,config){ 
							   		window.location.reload();
						},function(data,status,headers,config){
							   		window.location.reload();
						});
						},
					    connect : function(code){
						console.log(code);
						var codeData = {};
						codeData['code'] = code;
						$http({method : 'POST', 
						       url: 'connect?state='+ document.getElementById('state').value ,
						       async : false,data:codeData}).then(function(data,status,headers,config){
							   },function(data,status,headers,config){
							   });
					    }
					}
	    		}
	    	})
    	
    };
    
});
