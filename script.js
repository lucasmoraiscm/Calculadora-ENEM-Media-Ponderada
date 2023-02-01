function calcular() {
    var getRed = document.querySelector('input#notaRedacao')
    var notaRed = Number(getRed.value)
    var getPesoRed = document.querySelector('input#pesoRedacao')
    var pesoRed = Number(getPesoRed.value)

    var getLin = document.querySelector('input#notaLinguagens')
    var notaLin = Number(getLin.value)
    var getPesoLin = document.querySelector('input#pesoLinguagens')
    var pesoLin = Number(getPesoLin.value)

    var getMat = document.querySelector('input#notaMatematica')
    var notaMat = Number(getMat.value)
    var getPesoMat = document.querySelector('input#pesoMatematica')
    var pesoMat = Number(getPesoMat.value)

    var getNat = document.querySelector('input#notaNatureza')
    var notaNat = Number(getNat.value)
    var getPesoNat = document.querySelector('input#pesoNatureza')
    var pesoNat = Number(getPesoNat.value)

    var getHum = document.querySelector('input#notaHumanas')
    var notaHum = Number(getHum.value)
    var getPesoHum = document.querySelector('input#pesoHumanas')
    var pesoHum = Number(getPesoHum.value)

    var media = ((notaRed*pesoRed)+(notaLin*pesoLin)+(notaMat*pesoMat)+(notaNat*pesoNat)+(notaHum*pesoHum)) / (pesoRed+pesoLin+pesoMat+pesoNat+pesoHum)

    textoResultado.innerHTML = `<strong>Sua média é ${media.toFixed(2)}</strong>`
}
