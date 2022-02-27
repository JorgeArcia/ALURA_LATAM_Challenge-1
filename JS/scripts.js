document.querySelector('#encryption').addEventListener('click', encryption)
document.querySelector('#decrypt').addEventListener('click', decryption)
document.querySelector('#copy').addEventListener('click', copyText)


function encryption() {
    event.preventDefault()
    let text = document.querySelector("#textEncryption").value;

    var errorText = validationIn(text)
    if (errorText.length > 0) {
        showerrors(errorText)
        let textBoxOut = document.querySelector("#resultEncryption")
        textBoxOut.innerHTML = ""
        return
    } else {
        var ul = document.querySelector("#errorValidation")
        ul.innerHTML = ""
    }

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
    var text = document.querySelector("#textEncryption")
    textCopy.select()
    document.execCommand('copy')
    alert("Copied!")
    textCopy.innerHTML = "";
    text.innerHTML = "";
}

function validationIn(text) {
    var errors = [];
    const expresionRegular1 = new RegExp('[A-Z]', 'g')
    const expresionRegular2 = new RegExp('[#,$,!,¡,",%,&,´,á,ó,í,ú,é]', 'g')
    if (text.length == 0) {
        errors.push("No ingreso texto a encryptar")
    }
    if (expresionRegular1.test(text)) {
        errors.push("Solo puede ingresar texto en minuscula")
    }
    if (expresionRegular2.test(text)) {
        errors.push("No se admiten caracteres especiales")
    }
    return errors
}

function showerrors(errors) {
    var ul = document.querySelector("#errorValidation")
    ul.innerHTML = ""
    errors.forEach(err => {
        var li = document.createElement("li")
        li.textContent = err
        ul.appendChild(li)
    });
}