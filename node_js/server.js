var http = require('http');
var url = require('url');

http.createServer(function(rep, res){
    res.writeHead(200, {'Content-Type':'text/html'});
    res.write('<p>olá mundo</p>');
    res.end();
}).listen(8081); //porta

http.createServer(function(rep, res){
    res.writeHead(200, {'Content-Type':'text/html'});
    res.write(rep.url); //função que será executada
    res.end();
}).listen(8082); //porta

//micro-serviço
http.createServer(function(req, res){
    let query = url.parse(req.url, true).query;
    let nome = query.nome;
    let senha = query.senha;

    res.writeHead(201, {'Content-Type':'text/html'});
    res.write(`nome: ${nome} | senha: ${senha}`);
    res.end();
}).listen(8083);