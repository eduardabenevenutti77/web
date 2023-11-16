let frm = document.querySelector("form")
let resp1 = document.querySelector("h3")

frm.addEventListener('submit',  function() {
    let uso = Number(frm.inUso.value);
    let tempo = Number(frm.inTempo.value);

    let valor = (15 * uso) / tempo;

    resp1.innerText = `Valor a Pagar R$: ${valor}`;
})