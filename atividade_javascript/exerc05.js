let idades = [];
let pesos = [];
let sexos = [];

for(let i=0;i<=5;i++){
    idade = Number(prompt("Informe a "+(i+1)+"ª idade: "));
    idades.push(idade);

    kg = parseFloat(prompt("Informe o peso da "+(i+1)+"ª pessoa: "));
    pesos.push(kg);

    sex = Number(prompt("Informe o "+(i+1)+"º sexo (1-fem, 2-masc): "));
    sexos.push(sex);
}

let totalMasc = 0;
for(let i=0;i<=sexos.length;i++){
    if(sexos[i] == 2){
        totalMasc++;
    }
}
alert("O total de homens: "+totalMasc);

let totalFem = 0;
for(let i=0;i<sexos.length;i++){
    if(sexos[i] == 1){
        totalFem++;
    }
}
alert("O total de mulheres: "+totalFem);

let mediaIdade = 0;
for(let i=0;i<=idades.length;i++){
    if(sexos[i] == 2){
        mediaIdade += idades[i];
    }
}
alert("A média da idade masculina é: "+mediaIdade);

let mediaPeso = 0;
for(let i=0;i<=pesos.length;i++){
    if (sexos[i] == 1) {
        mediaPeso += pesos[i];
    }
}
alert("A média de pesos da mulheres é: "+mediaPeso);
