//mongod 
//mongo 
//cls
//show dbs
//help


db.usuarios.insertMany(
    [
        {
            "nombre": "Juan",
            "Apellido": "Paz",
            "edad": 20,
            "correo": "juan.paz@getDefaultNormalizer.com"
        },
        {
            "nombre": "Juan",
            "Apellido": "Perez",
            "edad": 40,
            "correo": "juan.perez@getDefaultNormalizer.com"
        },
        {
            "nombre": "Ana",
            "Apellido": "Paz",
            "edad": 30,
            "correo": "ana.paz@getDefaultNormalizer.com"
        }
    ]
)

db.productos.insert({
    "nombre": "computador",
    "precio": 50.8,
    "activo": true,
    "creado": new Date("09/11/2021"),
    "facturador": {
        "nombre": "dell",
        "version": "dv6000"
    }

})

db.productos.insertOne({
    "nombre": "computador",
    "precio": 60.8,
    "activo": true,
    "creado": new Date("09/11/2021"),
    "facturador": {
        "nombre": "dell",
        "version": "dv7000"
    }

})

db.productos.insertOne({
    "nombre": "teclado",
    "precio": 60,
    "activo": true,
    "creado": new Date("13/11/2021"),
    "facturador": {
        "nombre": "dell",
        "version": "2021"
    }

})

db.productos.insertOne({
    "nombre": "mouse",
    "precio": 25,
    "activo": true,
    "creado": new Date("09/11/2021"),
    "facturador": {
        "nombre": "dell",
        "version": "mouse3"
    }

})


//objectId
//1. Timestamp
//2. Identificador para el servidor
//3. PID
//4. Auto incremento

usuario = {
    "nombre": "Diego Iván",
    "apellido": "Oliveros Acosta",
    "correo": "ceo@scalapp.co"
};

db.usuario.insert(usuario);

db.usuarios.insertMany(
    [
        {
            "nombre": "user1",
            "Apellido": "Paz",
            "edad": 20,
            "correo": "user1.paz@getDefaultNormalizer.com"
        },
        {
            "nombre": "user2",
            "Apellido": "Perez",
            "edad": 40,
            "correo": "user2.perez@getDefaultNormalizer.com"
        },
        {
            "nombre": "user3",
            "Apellido": "Paz",
            "edad": 30,
            "correo": "user3.paz@getDefaultNormalizer.com"
        }
    ]
)

db.productos.update(
    { "facturador.version": "dv8000" },
    { $inc: { "precio": 10 } }

);
//operadores:
//gt              >
//gte             >=
//lte             <=
//lt              <
//ne              !=

//¿Quién es el usuario con nombre Diego?

db.usuarios.find({
    nombre: "Diego Iván"
})

db.usuarios.find({
    Apellido: "Paz"
})

db.usuarios.findOne({
    Apellido: "Paz"
})

db.usuarios.find({
    Apellido: "Paz"
}).sort({ nombre: 1 })


//¿Qué productos son más costosos de 10 USD?

db.productos.find() //todos 
//¿qué teclados tienen un precio menor a 50 USD?

db.productos.find({
    $and: [
        { precio: { $lte: 50 } },
        { nombre: "teclado" }
    ]
});
//¿qué teclados tienen un precio mayor a 60 USD?
db.productos.find({
    $and: [
        { precio: { $gt: 60 } },
        { nombre: "teclado" }
    ]
});
//¿qué teclados tienen un precio mayor e igual a 60 USD?
db.productos.find({
    $and: [
        { precio: { $gte: 60 } },
        { nombre: "teclado" }
    ]
});
//¿Qué productos tienen un precio menor a 80 UDS?
db.productos.find({
    precio: { $lt: 80 }
});
//¿Cuántos productos tienen un precio menor a 80 UDS?
db.productos.find({
    precio: { $lt: 80 }
}).count();

//cambiar el estado de un producto 
db.productos.update(
    { "facturador.version": "dv8000" },
    { $set: { "activo": false } }
);
db.productos.update(
    { "facturador.version": "mouse3" },
    { $set: { "activo": false } }
);
//¿cuáles son todos los productos que se han vendido?
db.productos.find({ "activo": false });
//$ne
db.productos.find({
    activo: { $ne: true }
});


//¿cuáles son todos los computadores que se han vendido?

db.productos.find({
    $and: [
        { nombre: "computador" },
        { "activo": false }
    ]
});
//¿cuáles son todos los computadores que no son versión dv8000?

db.productos.find({
    $and: [
        { nombre: "computador" },
        { "facturador.version": { $ne: "dv8000" } }
    ]
});

//¿cuáles son todos los computadores que no son versión dv8000 ni dv6000?

db.productos.find({
    $and: [
        { nombre: "computador" },
        { "facturador.version": { $ne: "dv8000" } },
        { "facturador.version": { $ne: "dv6000" } }
    ]
});

db.productos.find({
    $or: [
        { nombre: "computador" },
        { "facturador.version": { $ne: "dv8000" } },
        { "facturador.version": { $ne: "dv6000" } }
    ]
});

db.usuarios.find({

    edad: { $in: [10, 20] }

}
);

//Cuáles versiones finalizan con 8000
db.productos.find({ "facturador.version": /8000$/ })

//Cuáles son los productos cuya version comienza con dv   
//circunflejo Alt94
db.productos.find({ "facturador.version": /^dv/ })

//Cuáles son los productos que tienen "7"  
//circunflejo Alt94
db.productos.find({ "facturador.version": /7/ })


db.usuarios.update(
    {
        "_id": ObjectId("618b146f0144676571d94bc1")
    },
    {
        $set: {
            nombre: "Marta",
            apellido: "Torres",
            correo: "marta.torres@unmail.com",
            error: "un mal atrib"
        }
    }
)

db.usuarios.update(
    {
        "_id": ObjectId("618b146f0144676571d94bc1")
    },
    {
        $unset: {
            error: true
        }
    }
)

// cambiar todos los correos de los usuarios por uncorreo@gmail.com 

db.usuarios.updateMany(
    {
        "correo": { $exists: true },
    },
    {    $set: {
            "correo": "uncorreo@gmail.com"
        }
    }

);

// cambiar todos los correos de los usuarios con dominio @getDefaultNormalizer.com por gmail.com. 


db.usuarios.updateMany(
    {
        "correo": /@getDefaultNormalizer.com$/
    },
    {    $set: {
            "correo": "uncorreo@gmail.com"
        }
    }

);


db.usuarios.find({"correo": /@getDefaultNormalizer.com$/})


db.usuarios.find({"correo": /@scalapp.co$/})
db.usuarios.updateMany(
    {
        "correo": /@gmail.com$/
    },
    {    $set: {
            "correo": "ceo@scalapp.co"
        }
    }

);

db.usuarios.updateMany(
    {
        "nombre" : "Marta" 
    },
    {    $set: {
            "correo": "marta@gmail.com"
        }
    }

);



db.usuarios.updateMany(
    {
        "nombre" : "Marta" 
    },
    {    $set: {
            "correo": `${variable}@gmail.com`
        }
    }

);