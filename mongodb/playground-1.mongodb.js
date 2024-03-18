db.createCollection("users");

db.users.insertMany([
  {
    name: "jhon",
    lastname: "Gil",
    email: "jhongil@gmail.com",
    city: "Santiago de Chile",
    country: "Chile",
    salary: 2000,
    age: 20,
    height: 1.72,
    weight: 75,
  },
  {
    name: "Yasmin",
    lastname: "Carrasquilla",
    email: "yasmin@gmail.com",
    city: "Buenos Aires",
    country: "Argentina",
    salary: 3000,
    age: 24,
    height: 1.5,
    weight: 65,
  },
  {
    name: "Pedro",
    lastname: "Pablo",
    email: "pedro@gmail.com",
    city: "Houston",
    country: "Brasil",
    salary: 2500,
    age: 32,
    height: 1.6,
    weight: 59,
  },
  {
    name: "Lorena",
    lastname: "Castellano",
    email: "",
    city: "Berlin",
    country: "Alemania",
    salary: 3500,
    age: 30,
    height: 1.7,
    weight: 60,
  },
  {
    name: "Yesenia",
    lastname: "Giraldo",
    email: "yesenia@gmail.com",
    city: "Syndey",
    country: "Australia",
    salary: 4000,
    age: 32,
    height: 1.6,
    weight: 72,
  },
  {
    name: "Laura",
    lastname: "Tabares",
    email: "laura@gmail.com",
    city: "New York",
    country: "Canada",
    salary: 4200,
    age: 17,
    height: 1.7,
    weight: 60,
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
    weight: 80,
  },
  {
    name: "Ana Bertha",
    lastname: "Meneses",
    email: "ana@gmail.com",
    city: "Paris",
    country: "Francia",
    salary: 5000,
    age: 56,
    height: 1.6,
    weight: 60,
  },
  {
    name: "Mauricio",
    lastname: "Espinosa",
    email: "mauroespi@gmail.com",
    city: "Londres",
    country: "Reino Unido",
    salary: 5000,
    age: 48,
    height: 1.6,
    weight: 70,
  },
  {
    name: "Jaiver",
    lastname: "Espinosa",
    email: "mauroespi@gmail.com",
    city: "Roma",
    country: "Italia",
    salary: 5000,
    age: 25,
    height: 1.6,
    weight: 70,
  },
  {
    name: "Santiago",
    lastname: "Tobon",
    email: "santi@gmail.com",
    city: "Roma",
    country: "India",
    salary: "",
    age: 25,
    height: 1.6,
    weight: 70,
  }
]);

db.users.insertOne({
   name: "Alejandro",
    lastname: "Rios",
    email: "alejo@gmail.com",
    city: "Bogota",
    country: "Colombia",
    salary: "",
    age: 30,
    height: 1.6,
    weight: 110,
})

db.users.find({});

db.users.deleteMany({}); // basea toda la tabla

db.users.find({ age: { $ne: 30 } }); //que no sea igual

db.users.find({ age: { $gt: 30 } }); // mayores al valor que le ingresse

db.users.find({ age: { $eq: 30 } }); // busca iguales a 30 en este caso

db.users.find({ age: { $lte: 30 } }); // menor o igual a 30

db.users.find({ age: { $in: [56, 82] } });

//Obtener todos los usuarios que sean mayores de 18 años.

db.users.find({ age: { $gt: 18 } });

//Obtener todos los usuarios que sean de Londres o de París.

db.users.find({ city: { $in: ["Londres", "Paris"] } });

//Obtener a todos los usuarios que ganen más de $2000 al mes y tengan menos de 30 años.

db.users.find({ $and: [{ salary: { $gt: 2000 } }, { age: { $lt: 30 } }] });

//Obtener a todos los usuarios que sean de España y ganen más de $3000 al mes.

db.users.find({ $and: [{ country: { $eq: "España" } }, { salary: { $gt: 3000 } }] });

//Obtener todos los usuarios que tengan entre 25 y 35 años.

db.users.find({ $and: [{ age: { $gte: 25 } }, { age: { $lte: 35 } }] });

//Obtener a todos los usuarios que no sean de Estados Unidos.

db.users.find({ country: { $ne: "USA" } });

//Obtener a todos los usuarios que sean de Londres y que ganen más de $2500 o que tengan más de 30 años.
db.users.find({ $and: [{ city: "Londres" }, { $or: [{ salary: { $gt: 2500 } }, { age: { $gt: 30 } }] }] });

db.users.find({
  city: "Londres",
  $or: [{ salary: { $gt: 2500 } }, { age: { $gt: 30 } }],
});

//Obtener a todos los usuarios que sean de Australia y tengan un peso mayor a 140 libras.

db.users.find({ $and: [{ country: { $eq: "Australia" } }, { weight: { $gt: 70 } }] });

//Obtener a todos los usuarios que no sean de Londres ni de París.

db.users.find({ $and: [{ city: { $ne: "Londres" } }, { city: { $ne: "Paris" } }] });

//Obtener a todos los usuarios que ganen menos de $2000 al mes o que tengan más de 40 años.

db.users.find({ $or: [{ salary: { $lte: 2000 } }, { age: { $gt: 40 } }] });

//Obtener a todos los usuarios que sean de Canadá y ganen más de $4000 al mes o que tengan una altura mayor a 180 cm.

db.users.find({
  country: "Canada",
  $or: [{ salary: { $gt: 4000 } }, { height: { $gt: 1.8 } }],
});

//Obtener todos los usuarios que sean de Italia y tengan entre 20 y 30 años.

db.users.find({ $and: [{ country: { $eq: "Italia" } }, { age: { $gt: 20 } }, { age: { $lte: 30 } }] });

++//Obtener todos los usuarios que no tengan un correo electrónico registrado.

db.users.find({ email: { $eq: "" } });

//Obtener todos los usuarios que sean de Francia y que su salario esté entre $3000 y $5000 al mes.
db.users.find({ $and: [{ country: { $eq: "Francia" } }, { salary: { $gt: 3000 } }, { salary: { $lte: 5000 } }] });

//Obtener todos los usuarios que sean de Brasil y que tengan un peso menor a 120 libras o más de 140 libras.

db.users.find({
  country: "Brasil",
  $or: [{ weight: { $lte: 60 } },
  { weight: { $gt: 70 } }],
});

//Obtener todos los usuarios que sean de Argentina o de Chile y que tengan una edad menor a 25 años.

db.users.find({
  $or: [
    { country: "Argentina", age: { $lt: 25 } },
    { country: "Chile", age: { $lt: 25 } }
  ]
})


//Obtener a todos los usuarios que no sean de España ni de México y que ganen menos de $3000 al mes.

db.users.find({
  salary: {$lte: 3000},
  $or: [{ country: { $ne: "España" } },
  { country: { $ne: "Mexico" } }],
});

//Obtener todos los usuarios que sean de Alemania y que tengan un salario menor a $4000 o una edad mayor a 35 años.

db.users.find({
  country: "Alemania",
  $or: [{ salary: { $lte: 4000 } },
  { age: { $gt: 35 } }],
});

//Obtener todos los usuarios que no sean de Colombia y que su altura sea menor a 170 cm.

db.users.find({ $and: [{ country: { $ne: "Colombia" } }, { height: { $lte: 1.70 } }] });

//Obtener todos los usuarios que sean de India y que no tengan un salario registrado.

db.users.find({ $and: [{ country: { $eq: "India" } }, { salary: { $eq: "" } }] });


//************************************************************************* */

db.users.find({});


//Incrementar el salario de todos los usuarios en un 10%.

db.users.updateMany({},{ $mul: { salary: 1.1 } })

//Cambiar la ciudad de residencia de los usuarios que actualmente viven en "New York" a "Los Ángeles".

db.users.updateMany(
  { city: "New York" }, // Filtro para seleccionar los usuarios que viven en "New York"
  { $set: { city: "Los Angeles"}}  // Actualiza la ciudad a "Los Ángeles"
)

//Agregar el correo electrónico "nuevo@correo.com" al usuario con nombre "Juan" y apellido "Perez".

db.users.updateMany(
  { name: "Lorena", lastname: "Castellano" },
  {$set: { email: "nuevo@correo.com"}}
)

//Actualizar la edad del usuario con correo electrónico "ejemplo@correo.com" a 35 años.

db.users.updateMany(
  { email: "nuevo@correo.com" },
  {$set:{ age: 35}}
)

//Cambiar el país de residencia de los usuarios que son de "Mexico" a "Canada".

db.users.updateMany(
  { country: "Australia" },
  { $set: {country: "Canada"}}
)

//Aumentar la altura de todos los usuarios en 5 centímetros.

db.users.updateMany(
  {},{$mul: {height: 1.05}}
)

//Cambiar el apellido del usuario con correo electrónico "otro@ejemplo.com" a "González".

db.users.updateMany(
  { lastname: "Gil" },
  {$set: {email: "otro@ejemplo.com"}}
)

//Actualizar el peso del usuario con nombre "Maria" a 140 libras.

db.users.updateMany(
  { name: "Pedro" },
  {$set: {weight: 70}}
)

//Incrementar el salario de todos los usuarios que son de "Estados Unidos" en un 15%.

db.users.updateMany(
  { country: "Chile" },
  { $mul: {salary: 1.15 }}
)

//Actualizar el correo electrónico del usuario con nombre "Pedro" a "nuevo_correo@riwi.co".

db.users.updateMany(
  { name: "Pedro" },
  {$set: {email: "nuevo_correo@riwi.co"}}
)

//Cambiar la edad de todos los usuarios menores de 30 años a 30 años.

db.users.updateMany(
  {age: {$lte: 20}},
  {$set: {age: 30}}
)

//Incrementar el salario de los usuarios que tienen un salario inferior a 3000 dólares en un 20%.

db.users.updateMany(
  { salary: { $lte: 3000 } },
  {$mul: {salary: 1.20}}
)

//Actualizar la ciudad de residencia de todos los usuarios que actualmente viven en "Bogotá" a "Medellín".

db.users.updateMany(
  { city: "Bogota" },
  {$set: {city: "Medellin"}}
)

//Cambiar el país de residencia de los usuarios con un salario superior a 5000 dólares a "Australia".

db.users.updateMany(
  { salary: { $gt: 5000 } },
  {$set: {country: "Australia"}}
)

db.users.updateMany(
  { name: "Alejandro" },
  { $set: {salary: 1000 }}
)


//Reducir la edad de todos los usuarios que tienen más de 50 años en 5 años.

db.users.updateMany(
  { age: { $gte: 50 } },
  {$inc: {age: -5}}
)

//Actualizar el peso de los usuarios que pesan más de 200 libras a 180 libras.

db.users.updateMany(
  { weight: { $gte: 100 } },
  { $set: { weight: 90 } }
)

//Incrementar el salario de los usuarios que viven en "London" en un 25%.

db.users.updateMany(
  { country: "London" },
  {$mul: {salary: 1.25}}
)

//Cambiar el apellido de los usuarios con un salario superior a 4000 dólares a "Smith".

db.users.updateMany(
  { salary: { $gte: 4000 } },
  {$set: {lastname: "Smith"}}
)

//Actualizar el correo electrónico de todos los usuarios cuyo nombre empiece por "A" a "nuevo@riwi.es".

db.users.updateMany(
  { name: { $regex: /^A/i } },
  {$set: {email: "nuevo@riwi.es"}}
)

//Cambiar la ciudad de residencia de los usuarios con una altura inferior a 160 centímetros a "París".

db.users.updateMany(
  { height: { $lte: 1.6 } },
  {$set: {city: "Paris"}}
)


use(database);
db.createCollection(collection);

db.users.find({ ciudad : "New York"})

db.users.find({});

//Eliminar todos los usuarios que tienen un salario menor que 2000 dólares.
db.users.deleteMany({salario : {$lt : 2500}});
db.users.find({salario : {$lt : 2500}});
//Eliminar usuarios que tienen una edad menor que 25 años.
db.users.deleteMany({edad : {$lt : 25}});
db.users.find({edad : {$lt : 25}});
//Borrar todos los usuarios que viven en "París".
db.users.deleteMany({ciudad : "Paris"});
db.users.find({ciudad : "Paris"});
//Eliminar usuarios que tienen un peso superior a 180 libras.
db.users.deleteMany({peso : {$gt : 180}});
db.users.find({peso : {$gt : 180}});
//Eliminar usuarios que tienen una altura inferior a 160 centímetros.
db.users.deleteMany({altura : {$lt : 160}});
db.users.find({altura : {$lt : 160}});
//Eliminar todos los usuarios que tienen el nombre "John" y el apellido "Doe".
db.users.deleteMany({nombres : "John", apellido : "Doe"});
db.users.find({nombres : "Juan", apellidos : "Doe"});

//Borrar usuarios que tienen una dirección de correo electrónico específica, por ejemplo, "borrar@riwi.com".

db.users.deleteOne({correo: {$eq: "borrar@riwi.com"}});

//Eliminar usuarios que no tienen una dirección de correo electrónico registrada.

db.users.deleteMany({correo: {$eq: ""}});

//Eliminar usuarios que viven en "Tokyo"
db.users.find({ciudad : "Tokyo"});
//Borrar todos los usuarios que son menores de 18 años.

db.users.deleteMany({edad: {$lt: 18}});

//Eliminar usuarios que tienen un salario igual a 0.

db.users.deleteMany({salario: {$eq: 0}});

//Borrar usuarios que viven en "New York" y tienen un salario superior a 5000 dólares.

db.users.deleteMany({ciudad: {$eq: "New York"}}, {salario: {$eq:5000 }});

//Eliminar usuarios que tienen una dirección de correo electrónico que contiene la palabra "spam".

db.users.deleteMany({correo: {$regex: /spam/i }});

//Borrar usuarios que viven en "Bello" y tienen más de 50 años.

db.users.deleteMany({ciudad: {$eq: "Bello"}}, {edad: {$eq:50 }});

//Eliminar todos los usuarios que tienen el apellido "González".

db.users.deleteMany({apellido: {$eq: "Gonzales"}});
//
//Borrar usuarios que tienen una edad superior a 70 años.

db.users.deleteMany({edad: {$gt: 70}});
//
//Eliminar usuarios que tienen un país de residencia igual a "Canadá" y un salario inferior a 4000 dólares.

db.users.deleteMany({ciudad: {$eq: "Canada"}}, {salario: {$lt:4000 }});
//
//Borrar usuarios que tienen un salario entre 1000 y 2000 dólares.

db.users.deleteMany({salario: {$eq: 1000}}, {salario: {$lt:2000 }});

//Eliminar usuarios que tienen una edad igual a 30 años.

db.users.deleteMany({edad: {$eq: 30}});

//Borrar usuarios que tienen una altura superior a 190 centímetros.

db.users.deleteMany({altura: {$gt: 190}});
//
db.users.deleteMany({});