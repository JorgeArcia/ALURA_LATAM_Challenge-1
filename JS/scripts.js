document.querySelector('#encryption').addEventListener('click', encryption)
document.querySelector('#decrypt').addEventListener('click', decryption)
document.querySelector('#copy').addEventListener('click', copyText)


function encryption() {

    let text = document.querySelector("#textEncryption").value;
    let stringText = text.split(' ') // aca separo el texto en un array de palabras

    for (let i = 0; i < stringText.length; i++) {
        var newSentence = stringText[i].replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat")
        stringText[i] = newSentence
    }
    showEncryption(stringText.toString().replace(/,/g, " "))
}

function decryption() {
    let text = document.querySelector("#textEncryption").value;
    let stringText = text.split(' ') // aca separo el texto en un array de palabras
    for (let i = 0; i < stringText.length; i++) {
        var newSentence = stringText[i].replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u")
        stringText[i] = newSentence
    }
    showEncryption(stringText.toString().replace(/,/g, " "))
}

function showEncryption(text) {
    let textBoxOut = document.querySelector("#resultEncryption")
    textBoxOut.textContent = text
}

function copyText() {
    let textCopy = document.querySelector("#resultEncryption")
    textCopy.select()
    document.execCommand('copy')
    alert("Copied!")
}