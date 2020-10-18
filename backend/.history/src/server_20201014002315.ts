import express from 'express';

const app = express();


//rota= conjunto
//recurso = usuario(users)

//metodos HTTP = GET, POST, DELETE, PUT
//Parametos = abaixo os tres tipos de parametros
//QueryParams: http://localhost:3333/users?search=diego&page=2  (utilizamos interrogação e & para juntar os queryparams)
//RouteParams: http://localhost:3333/users/1 (identificar um recurso)
//Body: http://localhost:3333/users
app.post('/users', (request, response) => {
    console.log(request.query);

  return response.json({message:'Hello world'}); 
});

app.listen(3333);