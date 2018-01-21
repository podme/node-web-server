const express = require('express');
const hbs = require('hbs');//handlebars templating
var app = express();

app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
	// res.send('<h1>Hello express</h1>');
	res.send({
		name: 'Paul',
		likes: ['music', 'programming', 'cycling']
	});
});

app.get('/about', (req, res) => {
	// res.send('About page');
	res.render('about.hbs', {
		pageTitle : 'About Page',
		currYear : new Date().getFullYear()
	});
});
app.listen(3000, () => {
	console.log('listening on port 3000');
});