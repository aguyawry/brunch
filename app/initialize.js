document.addEventListener('DOMContentLoaded', function() {
	console.log('Top Initialized app');

	var express = require( 'express' );
	var nunjucks = require( 'nunjucks' );
	var app = express();

	var PATH_TO_TEMPLATES = '/views' ;
	nunjucks.configure( PATH_TO_TEMPLATES, {
    	autoescape: true,
    	express: app
	} ) ;

	
	var index = nunjucks.render('index.html');
	
  	console.log('Initialized app');
});
