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

require([ "angularjs", 'angularjs-route', "../services", "controllers"],
		function( angular, angularjs_route, 
				  service, controllers ) {

	var TsopModule = angular.module('Tsop', ['ngRoute']);

	TsopModule.rootfilepath = 'assets/views';
	
	// add Service, Controller to module
	service( TsopModule );
	controllers( TsopModule );

});
