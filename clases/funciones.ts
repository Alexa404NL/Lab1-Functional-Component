
// * sin valor de retorno 
// function saludar(nombre:string){
//     return `hola ${nombre} !!!!!!`;
// } 


// * con valor de retorno
function saludar(nombre:string):string{
    return `hola ${nombre} !!!!!!`;
}


// * flecha
const flecha = (nombre:string) =>{
    return `hallo motto ${nombre}`;
}

// const flecha = (nombre) => return `bonjour or idk ${nombre}`;

const msg = saludar('Saul');
const secondmsg = flecha('Jacinto');
console.log(msg)
console.log(secondmsg)