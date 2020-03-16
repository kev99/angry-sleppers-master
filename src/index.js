app.set ('port' , process.env.PORT || 3000 );

server.listen (app.get ('port') , () => {
    console.log(  ` server on port { app.get('port')}`);

});
