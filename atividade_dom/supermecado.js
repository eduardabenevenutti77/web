let frm = document.querySelector("form")
let resp = document.querySelector("h3")

frm.addEventListener("submit", (e) =>{
    let prod = frm.inNome.value
    let preco = Number(frm.inValor.value)

    let p1 = (preco * 3) - 3
    let p3 = preco - 3

    resp.innerText = `${prod} - Promoção: leve 3 produtos de: R$: ${preco} cada, comprando junto saí por apenas R$: ${p3}`
    alert(prod + " - PROMOÇÃO LEVE 3 PRODUTOS POR: " + p1 + ", com o 3 produto saindo por apenas " + p3 + " reais!! Não perca." )
})