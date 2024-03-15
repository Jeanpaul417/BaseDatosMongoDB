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
  },
  {
    name: "Santiago",
    lastname: "Tobon",
    email: "santi@gmail.com",
    city: "Roma",
    country: "India",
    salary: "",
    age: 22,
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
    age: 22,
    height: 1.6,
    weight: 70,
  }
]);

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
db.users.find({
  $or: [
    { country: "Argentina", age: { $lt: 25 } },
    { country: "Chile", age: { $lt: 25 } }
  ]
})

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
  $and: [{ country: { $ne: "España" } },
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


db.users.deleteMany({
  age: {$eq: 22}
})


//*********************************************************************************************** */
//Operaciones de Actualización


//Incrementar el salario de todos los usuarios en un 10%.

db.users.updateMany({
  salary : {salary + salary * 10%}
})

//Cambiar la ciudad de residencia de los usuarios que actualmente viven en "New York" a "Los Ángeles".

//Agregar el correo electrónico "nuevo@correo.com" al usuario con nombre "Juan" y apellido "Perez".

//Actualizar la edad del usuario con correo electrónico "ejemplo@correo.com" a 35 años.

//Cambiar el país de residencia de los usuarios que son de "Mexico" a "Canada".

//Aumentar la altura de todos los usuarios en 5 centímetros.

//Cambiar el apellido del usuario con correo electrónico "otro@ejemplo.com" a "González".

//Actualizar el peso del usuario con nombre "Maria" a 140 libras.

//Incrementar el salario de todos los usuarios que son de "Estados Unidos" en un 15%.

//Actualizar el correo electrónico del usuario con nombre "Pedro" a "nuevo_correo@riwi.co".

//Cambiar la edad de todos los usuarios menores de 30 años a 30 años.

//Incrementar el salario de los usuarios que tienen un salario inferior a 3000 dólares en un 20%.

//Actualizar la ciudad de residencia de todos los usuarios que actualmente viven en "Bogotá" a "Medellín".

//Cambiar el país de residencia de los usuarios con un salario superior a 5000 dólares a "Australia".

//Reducir la edad de todos los usuarios que tienen más de 50 años en 5 años.

//Actualizar el peso de los usuarios que pesan más de 200 libras a 180 libras.

//Incrementar el salario de los usuarios que viven en "London" en un 25%.

//Cambiar el apellido de los usuarios con un salario superior a 4000 dólares a "Smith".

//Actualizar el correo electrónico de todos los usuarios cuyo nombre empiece por "A" a "nuevo@riwi.es".

//Cambiar la ciudad de residencia de los usuarios con una altura inferior a 160 centímetros a "París".