const express = require('express');
const hbs = require('hbs');//handlebars templating
var app = express();

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));

hbs.registerHelper('getCurrentYear', () => {
	return new Date().getFullYear()
});

hbs.registerHelper('screamIt', (text) => {
	return text.toUpperCase();
});

app.get('/', (req, res) => {
	// res.send('<h1>Hello express</h1>');
	res.render('home.hbs', {
		pageTitle : 'Home Page',
		name: 'Paul',
		likes: ['music', 'programming', 'cycling'],
		welcomeMsg : 'Welcome!',

	});
});

app.get('/about', (req, res) => {
	// res.send('About page');
	res.render('about.hbs', {
		pageTitle : 'About Page'
	});
});
app.listen(3000, () => {
	console.log('listening on port 3000');
});