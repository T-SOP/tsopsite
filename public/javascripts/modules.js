/**
 * 
 */

var TsopModule = angular.module('Tsop', []);

TsopModule.rootfilepath = 'assets/views';

TsopModule.config([ '$routeProvider', function($routerProvider) {
	$routerProvider.when('/home', {
		templateUrl : TsopModule.rootfilepath + '/home.html',
		controller : 'HomeCtrl'
	}).when('/contents', {
		templateUrl : TsopModule.rootfilepath + '/content.html',
		controller : 'ContentCtrl'

	}).when('/member', {
		templateUrl : TsopModule.rootfilepath + '/member.html',
		controller : 'MemberCtrl'

	}).when('/about', {
		templateUrl : TsopModule.rootfilepath + '/about.html',
		controller : 'AboutCtrl'

	}).otherwise({
		redirectTo : '/home'
	})
} ]);
