/**
OB * Controllerss
 */

define(function() {

		return function( module ){

				// Tsop Main Ctrl
				module.controller('TsopCtrl', ['$scope','HomeSrvc', function($scope,HomeSevc) {

					CtrlScope = $scope; // Login Callback recv
					
						//this is credentail var
					$scope.user = {name : "", img : "", aboutMe : ""};

				    $scope.login = function(authResult){
						HomeSevc().connect(authResult.code);    
					}
				    
				    $scope.logout = function(){			
				    	HomeSevc().logout();
					}

				    $scope.renderProfile = function(code){
						var request = gapi.client.plus.people.get({'userId' : 'me'});
						request.execute( function(profile){
						    $scope.setUser(profile);
						    var user = {};
						    user['name'] = profile.displayName;
						    user['image'] = profile.image.url;
						    user['aboutMe'] = profile.aboutMe;
						    console.log(HomeSevc().login(user));
						});
	
					    }
					    $scope.setUser = function(profile){
						console.log(profile);
				    }

				}]);
				
				// T-sop Link Ctlr
				module.controller('TsopSnsLinkCtrl', ['$scope', function($scope) {
					$scope.snslist = [{name:'FaceBook', url:'https://www.facebook.com/groups/231252133706403/', target:'_blank'},
					                  {name: 'Google+', url:'https://plus.google.com/communities/105507378655558718131', target:'_blank'}];
				}]);
				

		};

});
