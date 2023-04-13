const objeto = {
    a: 1,
    b: 2,
    c: 3
}

const objeto2 = objeto //Copia de referencia, la direccion de memoria
objeto2.z = 100

//         ...objeto  ==>>  a:1     b:2    c:3
const objeto3 = { ...objeto, z: 100, a:5 } //Clonacion



// -------------------------------------------------------

function sumar3(num1, num2, num3){
    return num1+num2+num3
}

const array = [1,4,6]

//sumar3( array[0], array[1], array[2] )
//sumar3( 1, 4, 6 )
sumar3( ...array )




// --------------------------------------------------------

function generarArray( ...params ){
    return params
}

generarArray(  4, 8, 15  )




function splice(indexOf, count, ...add )

array.splice( 4, 2, "extra1", "extra2", "extra3" )