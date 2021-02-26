var Http = require( 'http' );
var fs = require('fs');
var url = require('url');

var server = Http.createServer(function(request,response){
  var uri = (request.connection.encrypted ? 'https': 'http') + '://' +
  request.headers.host + request.url;
  console.log(uri);
  var uri_parseada = url.parse(uri,true);
  console.log(uri_parseada);
    /*
    fs.readFile('hola.html',function(err,datos){
      console.log('Alguien entró . . . 1,2,3');
      response.write(datos);
      response.end();
    }); // a esta oarte le hace falta manejo de errores (excepciones)
    */
    // GET y ruta / --> pagina1.html
    // POST y ruta / --> pagina2.html
    // GET y ruta /mensaje --> recurso.json
    if (request.method=='GET') {
      if (uri_parseada.path=="/") {
        fs.readFile('pagina1.html',function(err,datos){
          console.log('Sirviendo pagina 1');
          response.writeHead(200,"Content-Type:test/html")
          response.write(datos);
          response.end();
        }); //falta manejo de excepciones
      } else {
        if (uri_parseada.path=="/mensaje") {
          fs.readFile('recurso.json',function(err,datos){
            console.log('Sirviendo recurso');
            response.writeHead(200,"Content-Type:test/json")
            response.write(datos);
            response.end();
          }); //falta manejo de excepciones
        }
      }
    } else {
      if (request.method=='POST') {
        fs.readFile('pagina2.html',function(err,datos){
          console.log('Sirviendo pagina 2');
          response.write(datos);
          response.end(); //falta manejo de excepciones
        });
      } else {
      }
    }
});

server.listen( 3000, function( ) {
console.log( 'Escuchando conexión en el puerto 3000' );
});
