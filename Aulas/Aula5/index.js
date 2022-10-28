function somar(x1,x2){
// argumentos ou parametros 
return x1+x2

}
let resultado = somar(1,2)
console.log(resultado);

function calc(x1,x2, operator){
    
    
    return eval(`${x1} ${operator} ${x2} `);
}

let resul = calc(2,3,"*");

console.log(resul);

// a function eval nativa do JS interpleta uma stringda forma que se precisa.
// function anonimas sãofunções que não possuem nomes e podem ser chamada no momento em que serem iniciadas
// inportante salientarque para esse tipo ela necessita estar dentro de parenteses 
(function (x1,x2){
    // argumentos ou parametros 
    return x1+x2
    
    })
    console.log(5,9);
// após isso elas não poderam mais ser chamadas ( gambiarras)

// Arrows Funcion 

 let calcu = (x1,x2, operator) =>{
    
    
    return eval(`${x1} ${operator} ${x2} `);
}

let result = calcu(20,3,"*");

console.log(resul);

// Manipulation of Dom elements( document object model) estrutura no qual o Html é formado
// eventos chama funçoes quando determinadas coisas acontecem 

window.addEventListener('focus', event =>{
    console.log("focus");

});

// na window podemos dar um reflesh mudar a propriedade da janela ablir uma nova java com Window.open
// ou fechar com window.close ou dar focus com Window.focus
document.addEventListener('click', event =>{
    console.log ('click');
});
// toda vez que for trabalhar com eventos é usado o listener funcion
// com datas éusado date

let agora = Date.now();
console.log(agora); // printa um time stamp que é a quantidade de segundo e mls desde janeiro de 1970 até hoje

let now = new Date();
console.log(now); // print