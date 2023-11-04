"use strict";
exports.__esModule = true;
function addTwo(num) {
    //return num + 2;
    return "hello";
}
function getUpper(val) {
    return val.toUpperCase();
}
function signUpUser(name, email, isPaid) { }
//parametros opcionales o con valores por defecto
var loginUser = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
};
var myValue = addTwo(5);
getUpper("Albert");
signUpUser("albert", "albert@gmail,com", true);
loginUser("namne", "hola");
