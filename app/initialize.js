document.addEventListener('DOMContentLoaded', function() {


	require('nunjucks');
	nunjucks.configure('views', { autoescape: true });
	nunjucks.render('index.html', { foo: 'bar' });
	
  	console.log('Initialized app');
});
