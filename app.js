require('dotenv').config();
const http = require('http');
const { SECRET } = process.env.SECRET;
http.createServer((req, res)=>{
	res.statusCode = 200;
	res.setHeader("Content-Type", "text/plain");
	res.end(SECRET);
}).listen(3000);