function soyUnCallback(data){
    console.log('soy el callback, ahora me toca a mi')
    console.log(data)
}

function haciendoUnaPeticionHTTP(callback){
    console.log('Estoy realizando otras operaciones')
    console.log('Ya casi termino....')

    callback({
        id: 1,
        username: 'raul_palacios',
        age: 25
    })
}

haciendoUnaPeticionHTTP(soyUnCallback)