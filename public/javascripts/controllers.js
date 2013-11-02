/**
 * 
 */

function TsopCtrl($scope) {
	console.log('tsop');
	$scope.test = 'tsop';
	$scope.login = function(){
		console.log('login click');
	}
		$scope.logout = function(){
		console.log('logout click');
	}
}

function ContentCtrl($scope) {
	console.log('content');
	$scope.test = 'content';
}

function MemberCtrl($scope) {
	console.log('member');
	$scope.test = 'member';
}

function AboutCtrl($scope) {
	console.log('about');
	$scope.test = 'about';
}

function HomeCtrl($scope) {
	console.log('home');
	$scope.test = 'Home';
}