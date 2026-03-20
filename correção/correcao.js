function obter_valores() {
    let valor1 = document.getElementById("numero1").value;
    let valor2 = document.getElementById("numero2").value;
    if (valor1 === "" || valor2 === "") {
        alert("Por favor, preencha os campos vazios.");
        return null;
    }
    let n1 = parseFloat(valor1);
    let n2 = parseFloat(valor2);
    if (isNaN(n1) || isNaN(n2)) {
        alert("Por favor, insira apenas números.");
        return null;
    }
    return { n1, n2 };
}

function exibir_resultado(resultado) {
    let elemento_resultado = document.getElementById("resultado");

    if (Number.isInteger(resultado)) {
        elemento_resultado.textContent = resultado;
    } else {
        elemento_resultado.textContent = resultado.toFixed(5);
    }
}

function somar() {
    let valores = obter_valores();
    if (valores === null) {
        return;
    }
    let resultado = valores.n1 + valores.n2;
    exibir_resultado(resultado);
}

function subtrair() {
    let valores = obter_valores();
    if (valores === null) {
        return;
    }
    let resultado = valores.n1 - valores.n2;
    exibir_resultado(resultado);
}

function multiplicar() {
    let valores = obter_valores();
    if (valores === null) {
        return;
    }
    let resultado = valores.n1 * valores.n2;
    exibir_resultado(resultado);
}

function dividir() {
    let valores = obter_valores();
    if (valores === null) {
        return;
    }
    if (valores.n2 === 0) {
        alert("ERROR: VOCÊ TÁ LOUCO CARA?!");
        return;
    }
    let resultado = valores.n1 / valores.n2;
    exibir_resultado(resultado);
}

function limpar() {
    document.getElementById("numero1").value = "";
    document.getElementById("numero2").value = "";
    document.getElementById("resultado").textContent = "";
    document.getElementById("numero1").focus() = "";
}

document.addEventListener("DOMContentLoaded", function () {
    let inputs = document.querySelectorAll("input");
    inputs.forEach(input => {
        input.addEventListener("keypress", function (event) {
            if (event.key === "Enter") {
                somar();
            }
        })
    })
})