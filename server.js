const express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
	// res.send('<h1>Hello express</h1>');
	res.send({
		name: 'Paul',
		likes: ['music', 'programming', 'cycling']
	});
});

app.get('/about', (req, res) => {
	res.send('About page');
});
app.listen(3000, () => {
	console.log('listening on port 3000');
});