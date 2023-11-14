const frm = document.querySelector("form")
const r1 = document.querySelector("#out1")
const r2 = document.querySelector("#out2")
const r3 = document.querySelector("#out3")

frm.addEventListener("submit", (e) =>{
    const carro = frm.inVec.value
    const valor = Number(frm.inValor.value)

    const entrada = valor * 0.50
    const parcela = entrada / 12


    r1.innerText = `O carro em promoção é - ${carro} - VALOR: R$: ${valor}`
    r2.innerText = `O valor de entrada será de R$: ${entrada}`
    r1.innerText = `+12x de R$: ${parcela.toFixed(2)}`
})