const carro = {
    tipo: "fiat",
    modelo: "pulse",
    cor: "cinza gráfite",
    buzinar(){
        return "biiiiiiiiiiiii";
    }
}
console.log(carro);
console.log(carro.modelo);
console.log(carro['cor']);
carro.cor = 'preto';
console.log(carro.cor);
console.log(carro.buzinar());


const carro2 = new Object();
carro2.modelo = 'mobi';
carro2.tipo = 'fiat';
carro2.cor = 'vermelho';
console.log(carro2);