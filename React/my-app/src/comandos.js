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
        "nombre":"dell",
        "version":"dv6000"
    }

})

db.productos.insertOne({
    "nombre": "computador",
    "precio": 60.8,
    "activo": true,
    "creado": new Date("09/11/2021"),
    "facturador": {
        "nombre":"dell",
        "version":"dv7000"
    }

})

db.productos.insertOne({
    "nombre": "teclado",
    "precio": 10,
    "activo": true,
    "creado": new Date("09/11/2021"),
    "facturador": {
        "nombre":"dell",
        "version":"dv8000"
    }

})

db.productos.insertOne({
    "nombre": "mouse",
    "precio": 25,
    "activo": true,
    "creado": new Date("09/11/2021"),
    "facturador": {
        "nombre":"dell",
        "version":"mouse3"
    }

})


//objectId
//1. Timestamp
//2. Identificador para el servidor
//3. PID
//4. Auto incremento

usuario ={
"nombre":"Diego Iván",
"apellido":"Oliveros Acosta",
"correo":"ceo@scalapp.co"
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
    {"facturador.version":"dv8000"},
    {$inc:{"precio":10}}
    
);
//operadores:
//gt              >
//gte             >=
//lte             <=
//lt              <
//ne              !=

//¿Quién es el usuario con nombre Diego?
//¿Qué productos son más costosos de 10 USD?
//¿qué teclados tienen un precio menor a 50 USD?

db.productos.find({
$and: [
    {precio:{$lte:50}},
    {nombre: "teclado"}
]
    });