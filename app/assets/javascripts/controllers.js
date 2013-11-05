/**
 * Controllerss
 */

define(function() {
	
    return function( module ){
    	
    	module.controller('TsopCtrl', ['$scope', function($scope) {
    		

			//this is credentail var

			$scope.logined = true;
    		console.log('tsop');
    		$scope.test = 'tsop';
    		$scope.login = function(){
    			console.log('login click');
    		}
    			$scope.logout = function(){
    			console.log('logout click');
    		}
    			
    	}]);


    	module.controller('ContentCtrl', ['$scope', function($scope) {
    		
    		console.log('content');
    		$scope.test = 'content';
    			
    	}]);
    	
    	module.controller('MemberCtrl', ['$scope', function($scope) {
    		console.log('member');
    		$scope.test = 'member';
    			
    	}]);
    	
    	module.controller('AboutCtrl', ['$scope', function($scope) {
    		console.log('AboutCtrl');
    		$scope.test = 'AboutCtrl';
    			
    	}]);
    	
    	module.controller('HomeCtrl', ['$scope', function($scope) {
    		console.log('HomeCtrl');
    		$scope.test = 'HomeCtrl';
    			
    	}]);
    	
    };
    
});
