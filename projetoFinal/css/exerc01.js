let altura=[];
altura[0] = '2.10'; 
altura[1] = '1.90'; 
altura[2] = '1.60'; 
altura[3] = '1.45'; 
altura[4] = '1.99'; 
altura[5] = '1.30'; 
altura[6] = '1.68'; 
altura[7] = '1.64'; 
altura[8] = '1.58'; 
altura[9] = '1.87'; 
altura[10] = '1.69'; 
altura[11] = '1.45'; 
altura[12] = '1.91'; 
altura[13] = '1.53'; 
altura[14] = '1.55'; 

let sexo=[];
sexo[0] = 'fem';
sexo[1] = 'fem';
sexo[2] = 'masc';
sexo[3] = 'masc';
sexo[4] = 'fem';
sexo[5] = 'fem';
sexo[6] = 'masc';
sexo[7] = 'fem';
sexo[8] = 'masc';
sexo[9] = 'masc';
sexo[10] = 'masc';
sexo[11] = 'fem';
sexo[12] = 'fem';
sexo[13] = 'fem';
sexo[14] = 'masc';

let max = altura[0];
let min = altura[0];
for(let i=0;i<altura.length;i++){
    if(altura[i]<max){
        max = altura[i];
    }
    if(altura[i]>min){
        min = altura[i];
    }
}
console.log("\nA maior altura na fila: "+max);
console.log("\nA menor altura na fila: "+min);

let mediaAltura = [0];
for(let i=0;i<altura.length;i++){
    if(sexo[i]=="fem"){
            mediaAltura++;  
        }
}
let media = (mediaAltura/15);
console.log("\nA média de altura das mulheres: "+media);

let nrH = 0;
for(let i=0;i<sexo.length;i++){
    if(sexo[i]=='masc'){
        nrH++;
    }
}
console.log("\nA quantidade de homens na lista: "+nrH);