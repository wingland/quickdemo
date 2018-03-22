import {sayHello} from '../my-module/module-a';
// or const {sayHello} = require ('../lucia-module');

console.log(sayHello('lucia'));
document.getElementById('demo').innerHTML = sayHello('Jesse');
