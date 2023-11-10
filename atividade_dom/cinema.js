let frm = document.querySelector("form")
let resp1 = document.querySelector("h3")
let resp2 = document.querySelector("h4")

frm.addEventListener("submit",  function() {
    let nome = frm.inNome.value;
    let tempo = frm.inTempo.value;

    let horas = Math.floor( tempo /60);
    let minutos = tempo % 60;

    resp1.innerText = nome;
    resp2.innerText = (horas + "hora "+ minutos + " minutos");
})