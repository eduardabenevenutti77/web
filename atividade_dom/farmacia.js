let frm = document.querySelector("form")
let resp1 = document.querySelector("h3")
let resp2 = document.querySelector("h4")


frm.addEventListener("submit", (e) =>{
    let medicamento = frm.inMed.value
    let valor = Number(frm.inValor.value)

    let promo = (valor * 2) - 0.9
    resp1.innerText = `Promoção de  ${medicamento}`
    resp2.innerText = `Leve 2 por apenas R$: ${valor}`

    e.preventDefault()
})