/**
 * Controllerss
 */

define(function() {

		return function( module ){

				// Tsop Main Ctrl
				module.controller('TsopCtrl', ['$scope','HomeSrvc', function($scope,HomeSevc) {


						//this is credentail var
						$scope.user = {name : "", img : "", aboutMe : ""};
						console.log('tsop');
						$scope.test = 'tsop';
						$scope.login = function(authResult){
								console.log(authResult);
								console.log('login click');
						 gapi.client.load('plus','v1',this.renderProfile);
	console.log($scope.user);					}
						$scope.logout = function(){						    console.log(HomeSevc());
						    console.log('logout click');
					}

				                $scope.renderProfile = function(){
					    var request = gapi.client.plus.people.get({'userId' : 'me'});
						    var username,image,about;			    request.execute( function(profile){
							console.log(profile);
							if(profile.error){
							    return;
							}
	   console.log(profile);
    });
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
				
				// T-sop Login Ctrl
				module.controller('TsopLoginCtrl', ['$scope', function($scope) {
					
					$scope.loginList = [{name:'GitHub Login', url:'/authenticate/github', target:''}];
					
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
