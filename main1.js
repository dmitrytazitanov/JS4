'use strict'
let number = +(prompt('Введите число в диапазоне от 0 до 999'));
console.log(number);
function createObjOfNumber() {
    if (!Number.isInteger(number)) {
        alert("Введите целое число");
        return{};
    }
    if (number<0 || number>999) {
        alert("Введите число в диапазоне от 0 до 999");
        return{};
    }
    return{
        units: number%10,
        tens: Math.floor((number%100)/10),
        hundreds: Math.floor(number/100)
    };
}
console.log(createObjOfNumber());

