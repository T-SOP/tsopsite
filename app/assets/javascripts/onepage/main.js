require.config({
    paths: {
    	'angularjs': '/assets/javascripts/lib/angular1.2.0/angular.min',
    	'angularjs-route' : '/assets/javascripts/lib/angular1.2.0/angular-route.min',
        'jquery': 'https://code.jquery.com/jquery-1.10.2.min',
        'bootstrap' : '//netdna.bootstrapcdn.com/bootstrap/3.0.2/js/bootstrap.min'
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
        },
        'bootstrap':{
        	deps: ['jquery'],
        	exports: 'bootstrap'
        }
    }
    
});

require([ "angularjs", 'angularjs-route', "../services", "controllers", "jquery", "bootstrap"],
		function( angular, angularjs_route, 
				  service, controllers ) {

	var TsopModule = angular.module('Tsop_onepage', []);

	TsopModule.rootfilepath = 'assets/views';
	
	// add Service, Controller to module
	service( TsopModule );
	controllers( TsopModule );
	
	// Index 에서 호출 하는 초기화용 자바 스크립트.
    $(document).ready(function() {
        $('.navbar-nav a').click(function(e) {
            var self = $(this);
            self.parent().parent().find('.active').removeClass('active');
            self.parent().addClass('active');
            $('html, body').animate({
                scrollTop : $(self.attr('href')).offset().top - 50
            }, {
                duration : 700,
                specialEasing : {
                    width : "linear",
                    height : "easeOutBounce"
                },
                complete : function() {

                }
            });
            return false;
        });
    });

});
