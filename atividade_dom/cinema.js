let frm = document.querySelector("form")
let resp1 = document.querySelector("h3")
let resp2 = document.querySelector("h4")

frm.addEventListener('submit',  function() {
    let nome = frm.inNome.value;
    let tempo = Number(frm.inTempo.value);

    let horas = Math.floor( tempo /60);
    let minutos = tempo % 60;

    resp1.innerText = `título: ${nome}`;
    resp2.innerText = `duração: ${horas} hora(s) e ${minutos} min.`;
})