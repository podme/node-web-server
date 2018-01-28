const express = require('express');
const hbs = require('hbs');//handlebars templating
const fs = require('fs');

var app = express();

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');

app.use((req, res, next) => {
	// here we can use middleware
	var now = new Date().toString();
	var log = `${now}: ${req.method} ${req.url}`;
	console.log(log);
	fs.appendFile('server.log', log + '\n', (e) => {
		if(e){
			console.log('unable to append to server.log');
		}
	});
	next();
});

// app.use((req, res, next) => {
// 	res.render('maintenance.hbs');
// });
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
		likes: ['programming', 'music', 'cycling'],
		welcomeMsg : 'Welcome!'
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