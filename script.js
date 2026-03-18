function add_char(caractere) {
    const valor_input = document.querySelector('.display').value;

    document.querySelector('.display').value = valor_input + caractere;
}

function limpa_tela() {
    document.querySelector('.display').value = '';
}

function calcula() {
    const valor_input = document.querySelector('.display').value;

    document.querySelector('.display').value = eval(valor_input);
}

function inverte_sinal() {
    const valor_input = document.querySelector('.display').value;

    document.querySelector('.display').value = valor_input * -1;
}