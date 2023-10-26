let numeros = [];

for(let i=0;i<=10;i++){
    let numero = Number(prompt("Informe o "+(i+1)+"º número: "));
    numeros.push(numero);
}

let numerosPares = 0;
let numerosImpares = 0;
for(let i=0;i<=numeros.length;i++){
    if(numeros[i]%2==0){
        numerosPares +=numeros[i];
    }else{
        numerosImpares += numeros[i];
    }
}

console.log("A média de números pares: "+numerosPares);
console.log("A média de números ímpares: "+numerosImpares);

let numerosPrimos = 0;
for(let i=0;i<=numeros.length;i++){
    if(numeros[i]/numeros[i]==0){
        numerosPrimos += numeros[i];
    }
}
console.log("A soma dos números primos: "+numerosPrimos);
