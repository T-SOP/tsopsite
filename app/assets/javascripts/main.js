require.config({
    paths: {
    	'angularjs': '/assets/javascripts/lib/angular1.2.0/angular.min',
    	'angularjs-route' : '/assets/javascripts/lib/angular1.2.0/angular-route.min',
        'jquery': '/assets/javascripts/lib/jquery-1.9.0.min'        
    },
    /**
     * for libs that either do not support AMD out of the box, or
     * require some fine tuning to dependency mgt'
     */
    shim: {
        'angularjs': {
            exports: 'angular',
            deps: ['jquery']
        },
        'angularjs-route' :{
        	deps: ['angularjs']
        },
        'jquery': {
            exports: 'jquery'
        }
    }
    
});

require([ "angularjs", 'angularjs-route', "services", "controllers", "content/controllers"],
		function( angular, angularjs_route, 
				  service, controllers, content_controller ) {

	var TsopModule = angular.module('Tsop', ['ngRoute']);

	TsopModule.rootfilepath = 'assets/views';
	
	// add Service, Controller to module
	service( TsopModule );
	controllers( TsopModule );
	content_controller( TsopModule );	// <-- 이렇게 추가 하는 부분을 없애야 할 것 같은 데...

	TsopModule.config([ '$routeProvider', function($routerProvider) {
		$routerProvider.when('/home', {
			templateUrl : TsopModule.rootfilepath + '/home.html',
			controller : 'HomeCtrl'
		}).when('/contents', {
			templateUrl : TsopModule.rootfilepath + '/content.html',
			controller : 'ContentCtrl'

		}).when('/regist', {
			templateUrl : TsopModule.rootfilepath + '/regist.html',
			controller : 'RegistCtrl'

		}).when('/regist/:contentId',{
			templateUrl : TsopModule.rootfilepath + '/regist.html',
			controller : 'RegistCtrl'
		}).when('/member', {
			templateUrl : TsopModule.rootfilepath + '/member.html',
			controller : 'MemberCtrl'

		}).when('/about', {
			templateUrl : TsopModule.rootfilepath + '/about.html',
			controller : 'AboutCtrl'

		}).when('/login', {
			templateUrl : TsopModule.rootfilepath + '/login.html',
			controller : 'TsopLoginCtrl'

		}).otherwise({
			redirectTo : '/home'
		})
	} ]);

});
