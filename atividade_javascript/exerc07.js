const dataInput = prompt('Digite a data no formato "dd/mm/aaaa":');
const dataExtenso = datas(dataInput);
console.log('A data é: ', dataExtenso);

function meses(mes) {
    const meses = [
        'janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho',
        'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'
    ];
    return meses[parseInt(mes) - 1];
}

function datas(data) {
    const partes = data.split('/');
    if (partes.length === 3) {
        const dia = partes[0];
        const mes = meses(partes[1]);
        const ano = partes[2];
        return dia + ' de ' + mes + ' de ' + ano;
    } else {
        return 'Formato inválido. Use "dd/mm/aaaa".';
    }
}