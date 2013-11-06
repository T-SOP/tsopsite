require.config({
    paths: {
    	
        'angularjs': '/assets/javascripts/lib/angular.min',
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
        'jquery': {
            exports: 'jquery'
        }
    }
    
});

require([ "angularjs", "services", "controllers"],
		function( angular, service, controllers ) {

	var TsopModule = angular.module('Tsop', []);

	TsopModule.rootfilepath = 'assets/views';
	
	// add Service, Controller to module
	service( TsopModule );
	controllers( TsopModule );

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

		}).otherwise({
			redirectTo : '/home'
		})
	} ]);

});
