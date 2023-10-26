let salario = parseFloat(prompt("Informe o salário do colaborador: "));

if(salario<=280){
    reajuste01 = (salario*0.2);
    alert("O reajuste é de R$: "+reajuste01);
    calculo01 = (reajuste01+salario);
    alert("O salário atualizado é de R$: "+calculo01);
}if (salario<=700) {
    reajuste02 = (salario*0.15);
    alert("O reajuste é de R$: "+reajuste02);
    calculo02 = (reajuste02+salario);
    alert("O salário atualizado é de R$: "+calculo02);
} if (salario<=1500) {
    reajuste03 = (salario*0.1);
    alert("O reajuste é de R$: "+reajuste03);
    calculo03 = (reajuste03+salario);
    alert("O salário atualizado é de R$: "+calculo03);
} else {
    reajuste04 = (salario*0.05);
    alert("O reajuste é de R$: "+reajuste04);
    calculo04 = (reajuste02+salario);
    alert("O salário atualizado é de R$: "+calculo04);
} 
