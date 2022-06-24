//DOM para los botones
let consultar = document.getElementById("ConsultaSaldo")
let ingresar = document.getElementById("IngresarSaldo")
let retirar = document.getElementById("RetirarSaldo")
let resultado = document.getElementById("resultado")

//Array con las cuentas por defecto 
let cuentas = [
    { nombre: 'Mali', saldo: 200, clave: 1245 },
    { nombre: 'Gera', saldo: 290, clave: 2136 },
    { nombre: 'Maui', saldo: 67, clave: 5469 }
  ];



//inicio de la validación del usuario
alert("Bievenido a la página ingresa el usuario porfavor")

//validación
//Mapeo para que con el array de  nombres hagamos la validación
const nombresUsuarios = nombresU => nombresU.nombre
//Array con los nombres de usuario
let arrayNombres = cuentas.map(nombresUsuarios)
console.log(arrayNombres)

//variable destinada a la validación de nombre de usuario
let validarN;
let validarP;
let nombreUsuarioActual
let claveUsuarioActual

do {
    //Le pedimos que ingrese el nombre de usuario
    let user = prompt("Ingresa el nombre de usuario")
    if (arrayNombres.includes(user)) {//if que valida si el nombre está dentro del registro
        alert("¡Se encontró tu nombre dentro del registro de la página!")
        validarN = 1
        nombreUsuarioActual = user;
    
        do {
            //Validación de la clave
        let password = prompt("Ingresa la clave "+user)
        //Filtro que me ayudará a buscar a la clave
        const searchPassword = key => key.clave == password;
        let iFoundPassword = cuentas.filter(searchPassword)
        //Me devuelve el arreglo con el objeto que coincide con la clave ingresada
        console.log(iFoundPassword)
        claveUsuarioActual = iFoundPassword
        //Ahora hacemos un mapeo que me devolverá solo la clave para compararla con la ingresada y hacer la validación
        const confirmarClave = clave => clave.clave
        //Se hace el mapeo y se guarda en un arreglo
        let imTheKey = iFoundPassword.map(confirmarClave)
        console.log(imTheKey[0])
        //comparamos el primer y único elemento del arreglo con la clave ingresada para hacer la validación
        if (imTheKey[0]==password) {
            alert("Clave correcta :D, bienvenido al sistema "+user)
            validarP = 1;

        } else {
            alert("Clave incorrecta, intentalo de nuevo")
            validarP = 0
        }
        } while (validarP<1);
    } else {
        alert("No se encontró ese nombre en el registro, escriba un nombre que esté dentro del registro")
        validarN = 0
    }
} while (validarN<1);//ciclo de validación

consultar.onclick = function(){

    const consultaSaldo = saldo => saldo.saldo
    let saldoActual = claveUsuarioActual.map(consultaSaldo)
    console.log(saldoActual)
    resultado.style.backgroundColor = "blanchedalmond"
    resultado.style.border = "5px solid orange"
   /* resultado.innerHTML = `<h2>CONSULTA DE SALDO</h2>`+"El usuario : "+nombreUsuarioActual+" cuenta con un saldo actual de : $"+saldoActual[0]+" pesos";
    console.log("Consulta de saldo finalizada con éxito")*/
    resultado.innerHTML = 
    ` 
    <h2>CONSULTA DE SALDO</h2>
    <h3>Usuario :${nombreUsuarioActual}</h3>
    <p>Saldo actual del usuario: $${saldoActual[0]} pesos</p>
    `
}

ingresar.onclick = function(){

    let verify
    let nuevoSaldo
    let aumentoDeSaldo
    let saldoAnterior

    do{
    let inputSaldo = prompt("Ingresa la cantidad de dinero a ingresar")
    aumentoDeSaldo = inputSaldo
    let u = cuentas.find(uname => uname.nombre == nombreUsuarioActual)
    console.log(u)
    let saldoAntiguo = u.saldo;
    
    for (let index = 0; index < cuentas.length; index++) {
        if (cuentas[index].nombre==nombreUsuarioActual) {
            saldoAnterior = cuentas[index].saldo
            cuentas[index].saldo= parseFloat(saldoAntiguo) + parseFloat(inputSaldo)
            if ( cuentas[index].saldo>990) {
                alert("¡LA CUENTA SOBREPASA EL SALDO LÍMITE! INTENTALO DE NUEVO")
                verify = 0
                cuentas[index].saldo = saldoAntiguo
            }else{
                verify = 1
                nuevoSaldo =  cuentas[index].saldo
            }
        }
    }
    }while(verify<1)


    resultado.style.backgroundColor = "blanchedalmond"
    resultado.style.border = "5px solid orange"
    /*
    resultado.innerHTML = `<h2>INGRESO DE NUEVO SALDO</h2>`
    +"Usuario : "+nombreUsuarioActual
    +"\nSaldo anterior:  $"+saldoAnterior+" pesos"
    +"\nSaldo ingresado: $"+aumentoDeSaldo
    +"\nSaldo actual: $"+nuevoSaldo;
    console.log("Consulta de saldo finalizada con éxito")*/

    resultado.innerHTML=
    `
    <h2>INGRESO DE SALDO</h2>
    <h3>Usuario :${nombreUsuarioActual}</h3>
    <p>${nombreUsuarioActual} contaba con un saldo de = $${saldoAnterior} pesos</p>
    <p>${nombreUsuarioActual} ingresó = $${aumentoDeSaldo} pesos</p>
    <p>por lo que el saldo actual es de = $${nuevoSaldo}pesos</p>
    `
}


retirar.onclick = function(){

    let verify
    let nuevoSaldo
    let decrementoDeSaldo
    let saldoAnterior

    do{
    let inputSaldo = prompt("Ingresa la cantidad de dinero a retirar")
    decrementoDeSaldo = inputSaldo
    let u = cuentas.find(uname => uname.nombre == nombreUsuarioActual)
    console.log(u)
    let saldoAntiguo = u.saldo;
    
    for (let index = 0; index < cuentas.length; index++) {
        if (cuentas[index].nombre==nombreUsuarioActual) {
            saldoAnterior = cuentas[index].saldo
            cuentas[index].saldo= parseFloat(saldoAntiguo) - parseFloat(inputSaldo)
            if ( cuentas[index].saldo<10) {
                alert("¡LA CUENTA DEBE TENER SALDO MÍNIMO DE $10! INTENTALO DE NUEVO")
                verify = 0
                cuentas[index].saldo = saldoAntiguo
            }else{
                verify = 1
                nuevoSaldo =  cuentas[index].saldo
            }
        }
    }
    }while(verify<1)


    resultado.style.backgroundColor = "blanchedalmond"
    resultado.style.border = "5px solid orange"
    /*resultado.innerHTML = `<h2>RETIRO DE SALDO</h2>`
    +"Usuario : "+nombreUsuarioActual
    +"\nSaldo anterior:  $"+saldoAnterior+" pesos"
    +"\nSaldo retirado: $"+decrementoDeSaldo
    +"\nSaldo actual: $"+nuevoSaldo;
    console.log("Consulta de saldo finalizada con éxito")*/
    resultado.innerHTML = 
    `
    <h2>RETIRO DE SALDO</h2>
    <h3>Usuario :${nombreUsuarioActual}</h3>
    <p>${nombreUsuarioActual} contaba con un saldo de = $${saldoAnterior} pesos</p>
    <p>${nombreUsuarioActual} retiró = $${decrementoDeSaldo} pesos</p>
    <p>por lo que el saldo actual es de = $${nuevoSaldo}pesos</p>
    `
}





    
