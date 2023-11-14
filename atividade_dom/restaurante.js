let frm = document.querySelector("form")
let resp = document.querySelector("h3")

frm.addEventListener("submit", (e) =>{
    let quilo = Number(frm.inBuffer.value)
    let consumo = Number(frm.inConsumo.value)

    let valor = (quilo / 1000) * consumo
    resp.innerText = `O valor a ser pago é de R$: ${valor.toFixed(2)}`

    e.preventDefault()
})