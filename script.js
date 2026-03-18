function add_char(caractere) {
    const valor_input = document.querySelector('.display').value;

    document.querySelector('.display').value = valor_input + caractere;
}

function limpa_tela(){
    document.querySelector('.display').value = '';
}