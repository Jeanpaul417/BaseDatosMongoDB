db.createCollection("users")

db.users.insertMany([{
    name: "jhon",
    lastname: "Gil",
    email: "jhongil@gmail.com",
    city: "New York",
    country: "USA",
    salary: 2000,
    age: 30,
    height: 1.72,
    weight: 75
},
{
    name: "Yasmin",
    lastname: "Carrasquilla",
    email: "yasmin@gmail.com",
    city: "Miami",
    country: "USA",
    salary: 3000,
    age: 28,
    height: 1.50,
    weight: 65
},
{
    name: "Pedro",
    lastname: "Pablo",
    email: "pedro@gmail.com",
    city: "Houston",
    country: "USA",
    salary: 2500,
    age: 32,
    height: 1.60,
    weight: 69
},
{
    name: "Lorena",
    lastname: "Castellano",
    email: "lorena@gmail.com",
    city: "Orlando",
    country: "USA",
    salary: 3500,
    age: 30,
    height: 1.70,
    weight: 60
},
{
    name: "Yesenia",
    lastname: "Giraldo",
    email: "yesenia@gmail.com",
    city: "Syndey",
    country: "Australia",
    salary: 4000,
    age: 32,
    height: 1.60,
    weight: 72
},
{
    name: "Laura",
    lastname: "Tabares",
    email: "laura@gmail.com",
    city: "New York",
    country: "Canada",
    salary: 4200,
    age: 17,
    height: 1.70,
    weight: 60
},
{
    name: "Benjamin",
    lastname: "Sierra",
    email: "benjamin@gmail.com",
    city: "Barcelona",
    country: "España",
    salary: 3500,
    age: 82,
    height: 1.72,
    weight: 80
},
{
    name: "Ana Bertha",
    lastname: "Meneses",
    email: "ana@gmail.com",
    city: "Paris",
    country: "Francia",
    salary: 5000,
    age: 56,
    height: 1.60,
    weight: 60
},
{
    name: "Mauricio",
    lastname: "Espinosa",
    email: "mauroespi@gmail.com",
    city: "Londres",
    country: "Reino Unido",
    salary: 5000,
    age: 48,
    height: 1.60,
    weight: 70
}])


db.users.find({});

db.users.find({ age: {$ne : 30}}); //que no sea igual

db.users.find({ age: {$gt : 30}});// mayores al valor que le ingresse

db.users.find({ age: {$eq : 30}}); // busca iguales a 30 en este caso

db.users.find({ age: {$lte : 30}}); // menor o igual a 30

db.users.find({ age: {$in :[56, 82]}}); 

db.users.deleteMany({}); // basea toda la tabla

//Obtener todos los usuarios que sean mayores de 18 años.

db.users.find({ age: {$gt : 18}});

//Obtener todos los usuarios que sean de Londres o de París.

db.users.find({ city: {$in :["Londres", "Paris"]}});

//Obtener a todos los usuarios que ganen más de $2000 al mes y tengan menos de 30 años.

db.users.find({ $and:[{salary: { $gt: 2000}},{age: { $lt: 30} }]});

//Obtener a todos los usuarios que sean de España y ganen más de $3000 al mes.

db.users.find({ $and:[{country: { $eq: "España"}},{salary: { $gt: 3000} }]});

//Obtener todos los usuarios que tengan entre 25 y 35 años.

db.users.find({ $and:[{age: { $gte: 25}},{age: { $lte: 35} }]});


//Obtener a todos los usuarios que no sean de Estados Unidos.

db.users.find({country : {$ne : "USA"}});

//Obtener a todos los usuarios que sean de Londres y que ganen más de $2500 o que tengan más de 30 años.
db.users.find({$and: [{ city: "Londres" }, { $or: [ { salary: { $gt: 2500 } }, { age: { $gt: 30 } }]}]})



db.users.find({ 
    city: "Londres", 
    $or:[ 
        { salary: { $gt: 2500 }},
        { age:{ $gt: 30 }}
    ]
});


//Obtener a todos los usuarios que sean de Australia y tengan un peso mayor a 140 libras.

db.users.find({ $and:[{country: { $eq: "Australia"}},{weight: { $gt: 70} }]});

//Obtener a todos los usuarios que no sean de Londres ni de París.

db.users.find({$and: [{city : {$ne : "Londres"}},{city : {$ne: "Paris"}} ]});

//Obtener a todos los usuarios que ganen menos de $2000 al mes o que tengan más de 40 años.

db.users.find({$or: [{salary : {$lte: 2000}},{age: {$gt: 40}}]})

//Obtener a todos los usuarios que sean de Canadá y ganen más de $4000 al mes o que tengan una altura mayor a 180 cm.

db.users.find({ 
    country: "Canada", 
    $or:[ 
        { salary: { $gt: 4000 }},
        { height:{ $gt: 1.80 }}
    ]
});

//Obtener todos los usuarios que sean de Italia y tengan entre 20 y 30 años.
//Obtener todos los usuarios que no tengan un correo electrónico registrado.
//Obtener todos los usuarios que sean de Francia y que su salario esté entre $3000 y $5000 al mes.
//Obtener todos los usuarios que sean de Brasil y que tengan un peso menor a 120 libras o más de 140 libras.
//Obtener todos los usuarios que sean de Argentina o de Chile y que tengan una edad menor a 25 años.
//Obtener a todos los usuarios que no sean de España ni de México y que ganen menos de $3000 al mes.
//Obtener todos los usuarios que sean de Alemania y que tengan un salario menor a $4000 o una edad mayor a 35 años.
//Obtener todos los usuarios que no sean de Colombia y que su altura sea menor a 170 cm.
//Obtener todos los usuarios que sean de India y que no tengan un salario registrado.
 

