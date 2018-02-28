const express = require('express');
const app = express();

// Extra dependencies just to read POST data bodies
const multer = require('multer');
const bodyParser = require('body-parser');
const upload = multer();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

function handleRequest(req, res) {
	console.log('\n-- INCOMING REQUEST AT ' + new Date().toISOString());
	console.log(req.method + ' ' + req.url);
	console.log(req.body);
	res.send('Hello World!');
}

app.post('/*', upload.any(), (req, res) => handleRequest(req, res));
app.all('/*', (req, res) => handleRequest(req, res));
app.listen(9000, () => console.log('Example app listening on port 9000!'));
