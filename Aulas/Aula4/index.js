var olaMundo =  "Olá Mundo";

let a = 10;
const b=20;
//= atribuição e != diferente
// == igualdade de comparação de valores
//=== igualdade de comparação de valor e tipo
console.log(a==b);
//  && usando quando duas condiçoes tem que ser iguais juntas "end"
//  || usando quando uma das duas condiçoes ou as duas sejam verdadeiras "or"
//  


console.log(olaMundo);
console.log(olaMundo);
console.log('olá mundo!');
console.log('olá mundo!');
console.log('olá mundo!');

// condições em JavaScript
let cor = "azul";
// if (cor ==="verde"){
//     console.log("siga");
// }else if (cor ==="vermelho"){
//     console.log("pare");
// }else {
//     console.log("atenção");
// }

switch (cor) {
    case "verde": console.log("siga");
    break;
    case "vermelho": console.log("pare");
    break;
    case "amararelo": console.log("Atenção");
    break;
    default: console.log("não sei");
    // defaut é usado como um coringa caso nada seja sastisfeito cai aqui.
    // break serve para parar o laço 
    // continue serve como um next ele passa para o proximo elemento do laço sem interromper
}
    let n = 5;

    for (let i = 0; i <=10; i++) {
        console.log(`${i} X ${n}= ${i*n}`)
}
 // `template String ${js}` permite que você pulelinhas e coloque comando dentro desses textos