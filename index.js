const http = require('http');
let fs = require("fs");

const readFile = (path, response) => {
    
    fs.readFile( path, (error, content) => {
        if(!error){
            response.write(content);
            response.end();
        }else{
            response.write("<h1>404</h1>");
            response.end();
        }
    });
}


http.createServer((request,response) => {

    response.setHeader('Content-Type', 'text/html; charset=utf-8');

    switch (request.url) {
        
        case '/':
            readFile('./vistas/home-screen.html',response)
            break;

        case '/contacto':
            readFile('./vistas/contacto.html',response)
            break;

        case '/nosotros':
            readFile('./vistas/nosotros.html', response);
            break;
        
        case '/proyectos':
            readFile('./vistas/proyectos.html', response);
            break;
        
        case '/favicon':
            response.setHeader('Content-Type', 'text/html; charset=utf-8');
            readFile('./vistas/favicon.ico', response);
            break;

        default:
            readFile('./vistas/404.html', response);
            break;
    }

}).listen(8080);