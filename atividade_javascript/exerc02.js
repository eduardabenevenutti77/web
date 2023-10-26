let idades = [];
let opnioes = [];

for(let i=0; i<=15;i++){
    let idade = Number(prompt("Informe a "+(i+1)+" idade: "));
    idades.push(idade);
}

for(let i=0;i<=15;i++){
    let opniao = Number(prompt("\nInforme a "+(i+1)+" opnião (3-ótimo;2-regular;1-ruim): "));
    opnioes.push(opniao);
}

let mediaIdade = 0;
for(let i=0;i<idades.length;i++){
    if(opnioes[i] == 3){
        mediaIdade += idades[i];
    }
}
let media = (mediaIdade/15);
console.log("A média de idades das pessoas que responderam ótimo é: "+media);

let respostaRegular = 0;
for(i=0;i<opnioes.length;i++){
    if(opnioes[i] == 2){
        respostaRegular++;
    }
}
console.log("A quantidade de respostas regular: "+respostaRegular);

let porcentagem = 0;
for(let i=0;i<=opnioes.length;i++){
    if(opnioes[i] == 1){
        porcentagem++;
    }
}
let calculo = (porcentagem/opnioes.length)*100;
console.log("A porcentagem de respostas boas foram: "+calculo);
