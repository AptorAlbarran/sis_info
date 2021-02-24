var Http = require( 'http' );
var server = Http.createServer(function(request,response){
    console.log('Hay una rata en la madriguera');
    console.log(request.url);
    console.log(request);
    response.writeHead(404,"Contenr.t-Type:text/html");
    if (request.method=='GET'){
    response.write("<style> h1 {color:blue} </style>");
    response.write("<h1>Hola ICO FES Arag&oacute;n, la mejor carrera</h1>");
  }else{
    response.write("no es get!")
  }
    response.end();
});

server.listen( 3000, function( ) {
console.log( 'Escuchando conexión en el puerto 3000' );
});
