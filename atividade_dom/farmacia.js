const prompt = require("prompt-sync")()
let resp1 = document.querySelector("h3")
let resp2 = document.querySelector("h4")

const valor = Number(prompt("informe o valor do produto: "))
const aux = Math.floor(valor/20) //declaração de uma variável auxiliar que ira calcular o número de parcelas desse produto
const parcelas = aux == 0? 1 : aux > 6 ? 6 : aux
const valorParcelas = valor / parcelas


resp1.innerText = `O valor do produto poderá ser pago em : ${parcelas} parcelas!`;
resp2.innerText = `Sendo o valor de cada parcela de R$: ${valorParcelas}.`;