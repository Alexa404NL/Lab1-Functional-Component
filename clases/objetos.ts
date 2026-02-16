const student = { 
    matricula : 'a01571503',
    nombre : 'ale',
    direccion : {
        ciudad : 'monterrey',
        cp: 12032
    }
};

console.table(student);
//console.log(student);

const student2 = {...student};
student2.nombre='joseph'

console.table(student2);
