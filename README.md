Restful CRUD API with Node.js, Express and MongoDB

I created Data Base in mongoDB called Pruducts, and a products collection in it with the Schema :
{
name: String,
price: Number,
description: String
}

The project organized in the MCV model

M - model (Data Base Schema)
V - view ( what is shown to client)
C - controllers (implementation of the REST, of the routes)

start mongoDB:

bin./mongod.exe
bin./mongo.exe

start the App: 

node app.js



