const express = require('express');

const app = express();
const baseDir = __dirname + '/';
const angularDir = baseDir + '/angular-basic-frame/dist/angular-basic-frame/';

app.use(express.static(angularDir));

app.use('/', function(request, response, next) {
	response.sendFile(angularDir + 'index.html');
});

app.listen(3000, function() {
    console.log('server start 3000');
}) 