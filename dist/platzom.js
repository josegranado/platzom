'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = platzom;
/*
export default function platzom(str) {
}

De este modo, al momento de importar la librería en otro proyecto sera de la forma:

import platzom from ‘platzom\'

Y cuando tenemos varias funciones que queremos importar, usamos solo export:

export function platzom(str) {

}

Así para usar el import lo hacemos del modo:

Import {platzom} from platzom

*/
function platzom(str) {
    var translation = str;
    //Si la papalbra termina en "ar", se le quitan esos dos caracteres.
    if (str.toLowerCase().endsWith('ar')) {
        translation = str.slice(0, -2);

        // Slice nos permite cortar caracteres
    }

    // Si la palabra inicia con Z, se le añade "pe" al final
    if (str.toLowerCase().startsWith('z')) {
        translation += 'pe';
    }

    // Si la palabra traducda tine 0 o más letras,
    //Se debe partir a la mitad y unir con un guión de medio.

    if (translation.length >= 10) {
        var firstHalf = translation.slice(0, Math.round(translation.length / 2));
        var secondHalf = translation.slice(Math.round(translation.length / 2));
        translation = firstHalf + '-' + secondHalf;
    }

    // Si la palabra original es un palíndromo, ninguna regla anteror cuenta y se devuelve 
    // la misma palabra intercalando mayúcula y minúsculas.
    var reverse = function reverse(str) {
        return str.split('').reverse().join('');
    };

    function minMay(str) {
        var length = str.length;
        var translation = '';
        var capitalize = true;
        for (var i = 0; i < length; i++) {
            var char = str.charAt(i);
            translation += capitalize ? char.toUpperCase() : char.toLowerCase();
            capitalize = !capitalize;
        }
        return translation;
    }
    if (str == reverse(str)) {
        return minMay(str);
    }
    return translation;
}