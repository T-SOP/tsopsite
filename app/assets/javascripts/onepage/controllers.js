/**
 * Controllerss
 */

define(function() {

		return function( module ){

			console.log( "controllers  init " );
			
			// Tsop Main Ctrl
			module.controller('TsopOnepageCtrl', ['$scope', 'HomeSrvc', function($scope,HomeSevc) {

				CtrlScope = $scope;
				
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
			
			module.controller('onepage_project_ctrl', ['$scope', function($scope) {
	
				$scope.contents = [
				                   { 
				                	   title:'프로젝트 #1',
				                	   subtitle: 'scala-for-the-impatient',
				                	   descript: '본 프로젝트는 테스트 템플릿으로서 아무런 이유가 없이 작성 되었음을 알립니다.\n그리고 그냥 채워 넣고 있으니 읽지 않으셔도 됩니다.\n',
				                	   descimgurl: 'http://ofbuckleyandbeatles.files.wordpress.com/2011/01/testpattern.gif'
				                   },
				                   { 
				                	   title:'프로젝트 #2',
				                	   subtitle: 'scala-for-the-impatient',
				                	   descript: '본 프로젝트는 테스트 템플릿으로서 아무런 이유가 없이 작성 되었음을 알립니다.\n그리고 그냥 채워 넣고 있으니 읽지 않으셔도 됩니다.\n',
				                	   descimgurl: 'http://ofbuckleyandbeatles.files.wordpress.com/2011/01/testpattern.gif'
				                   },
				                   { 
				                	   title:'프로젝트 #3',
				                	   subtitle: 'scala-for-the-impatient',
				                	   descript: '본 프로젝트는 테스트 템플릿으로서 아무런 이유가 없이 작성 되었음을 알립니다.\n그리고 그냥 채워 넣고 있으니 읽지 않으셔도 됩니다.\n',
				                	   descimgurl: 'http://ofbuckleyandbeatles.files.wordpress.com/2011/01/testpattern.gif'
				                   },
				                   { 
				                	   title:'프로젝트 #4',
				                	   subtitle: 'scala-for-the-impatient',
				                	   descript: '본 프로젝트는 테스트 템플릿으로서 아무런 이유가 없이 작성 되었음을 알립니다.\n그리고 그냥 채워 넣고 있으니 읽지 않으셔도 됩니다.\n',
				                	   descimgurl: 'http://ofbuckleyandbeatles.files.wordpress.com/2011/01/testpattern.gif'
				                   }
				                   ];
	
			}]);
			
			module.controller('onepage_member_ctrl', ['$scope', function($scope) {
				
				$scope.contents = [
				                   { 
				                	   iconurl: 'http://ofbuckleyandbeatles.files.wordpress.com/2011/01/testpattern.gif',
				                	   name:'farmersbs',
				                	   descript: '프로그램이 하고 싶은 프로그래머...'
				                   },
				                   { 
				                	   iconurl: 'http://ofbuckleyandbeatles.files.wordpress.com/2011/01/testpattern.gif',
				                	   name:'bongster',
				                	   descript: '검색과 관련된 모든 기술에 호기심이 왕성한 아침에 계란 2개 먹는 프로그래머...'
				                   },
				                   { 
				                	   iconurl: 'http://ofbuckleyandbeatles.files.wordpress.com/2011/01/testpattern.gif',
				                	   name:'agileup',
				                	   descript: '코어 개발자 이지만, UI를 담당하고 있는 프로그래머...'
				                   }
				                   ];
	
			}]);

		};

});
