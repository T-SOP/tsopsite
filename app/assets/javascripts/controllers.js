/**
 * Controllerss
 */

define(function() {

		return function( module ){

				// Tsop Main Ctrl
				module.controller('TsopCtrl', ['$scope','HomeSrvc', function($scope,HomeSevc) {


						//this is credentail var

						$scope.logined = true;
						console.log('tsop');
						$scope.test = 'tsop';
						$scope.login = function(authResult){
								console.log(authResult);
								console.log('login click');
						}
						$scope.logout = function(){
								console.log(HomeSevc());
								console.log('logout click');
						}

				}]);
				
				module.controller('RegistCtrl',['$scope',function($scope){
					console.log('regist');
				}]);
				// T-sop Link Ctlr
				module.controller('TsopSnsLinkCtrl', ['$scope', function($scope) {
					
					$scope.snslist = [{name:'FaceBook', url:'https://www.facebook.com/groups/231252133706403/', target:'_blank'},
					                  {name: 'Google+', url:'https://plus.google.com/communities/105507378655558718131', target:'_blank'}];
					
					
					
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
