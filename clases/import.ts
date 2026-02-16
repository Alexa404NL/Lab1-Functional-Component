import {bancos} from '../bancos.js'

let getBanco = (id) => bancos.find ((banco) => banco.id ===id);
console.log (getBanco(1));