function calcularMediaPonderada() {
    const getRedacao = document.querySelector('input#notaRedacao')
    const notaRedacao = Number(getRedacao.value)
    const getPesoRedacao = document.querySelector('input#pesoRedacao')
    const pesoRedacao = Number(getPesoRedacao.value)

    const getLinguagens = document.querySelector('input#notaLinguagens')
    const notaLinguagens = Number(getLinguagens.value)
    const getPesoLinguagens = document.querySelector('input#pesoLinguagens')
    const pesoLinguagens = Number(getPesoLinguagens.value)

    const getMatematica = document.querySelector('input#notaMatematica')
    const notaMatematica = Number(getMatematica.value)
    const getPesoMatematica = document.querySelector('input#pesoMatematica')
    const pesoMatematica = Number(getPesoMatematica.value)

    const getNatureza = document.querySelector('input#notaNatureza')
    const notaNatureza = Number(getNatureza.value)
    const getPesoNatureza = document.querySelector('input#pesoNatureza')
    const pesoNatureza = Number(getPesoNatureza.value)

    const getHumanas = document.querySelector('input#notaHumanas')
    const notaHumanas = Number(getHumanas.value)
    const getPesoHumanas = document.querySelector('input#pesoHumanas')
    const pesoHumanas = Number(getPesoHumanas.value)

    if (notaRedacao >= 0 && notaLinguagens > 0 && notaMatematica > 0 && notaNatureza > 0 && notaHumanas > 0) {
        if (pesoRedacao > 0 && pesoLinguagens > 0 && pesoMatematica > 0 && pesoNatureza > 0 && pesoHumanas > 0) {
            const mediaPonderada = ((notaRedacao*pesoRedacao) + (notaLinguagens*pesoLinguagens) + (notaMatematica*pesoMatematica) + (notaNatureza*pesoNatureza) + (notaHumanas*pesoHumanas)) / (pesoRedacao + pesoLinguagens + pesoMatematica + pesoNatureza + pesoHumanas)
            textoResultado.innerHTML = `<strong>Sua média é ${mediaPonderada.toFixed(2)}</strong>`
        } else {
            textoResultado.innerHTML = `<strong>Peso inválido</strong>`
        }
    } else {
        textoResultado.innerHTML = `<strong>Nota inválida</strong>`
    }
}
