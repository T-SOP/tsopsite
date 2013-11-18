/**
 * Controllerss
 */

define(function() {

		return function( module ){

				module.controller('ContentCtrl', ['$scope', function($scope) {

						// AddNewContents
						$scope.modeNewPost = false;
						$scope.addNewContents = function(){
							
							$scope.modeNewPost = !$scope.modeNewPost;
							
						}
						
						
						////////////////////////////////////////////////////
						// Pin Content
						$scope.pinContents = [];
						
						$scope.addPinContent = function( content ){
							
							$scope.pinContents.unshift( content );
							
						}
						
						
						////////////////////////////////////////////////////
						// New Content
						// Contents List { type:'', data:'' }
						$scope.newContentinfo = {};
						$scope.contentLists = [];
						
						$scope.addContent = function( type ){
							if( "text" == type ||
								"imageurl" == type ||
								"html" == type){
								$scope.contentLists.push( { type:type, data:'' } );
							}
						};
						
						$scope.onSave = function(){
							
							$scope.newContentinfo.contentlists = $scope.contentLists;
							console.log( $scope.newContentinfo );
							$scope.addPinContent( $scope.newContentinfo );
							
						};
						
						

				}]);

		};

});
