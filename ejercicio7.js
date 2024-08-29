// 7. Concatenación de arreglos
function concatenarArreglos(arr1, arr2) {
    // Concatenar y eliminar duplicados
    return [...new Set(arr1.concat(arr2))];
}
console.log(concatenarArreglos(["Y recuerda las palabras de tu padre Thorfin"], [",tu no tienes enemigos"])); 
// Salida: ["Y recuerda las palabras de tu padre Thorfin tu no tienes enemigos"]