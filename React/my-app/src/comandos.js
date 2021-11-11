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
    "nombre": "computador",
    "precio": 70.8,
    "activo": true,
    "creado": new Date("09/11/2021"),
    "facturador": {
        "nombre":"dell",
        "version":"dv8000"
    }

})


//objectId
//1. Timestamp
//2. Identificador para el servidor
//3. PID
//4. Auto incremento