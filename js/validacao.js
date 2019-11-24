function validarLogin() {
    event.preventDefault();

    let email = formLogin.email
    let password = formLogin.password
    
    if( email.value == '') {
        alert('Preencha seu Email corretamente')
        email.focus();
        return false;
    } else if(password.value === '') {
        alert('Preencha sua Senha corretamente')
        password.focus();
    } else {
        formLogin.submit();
    }

}

function validarCadastro() {
    event.preventDefault();
    
    let nome = formCadastro.PrimeiroNome;
    let sobrenome = formCadastro.Sobrenome;
    let email = formCadastro.email;
    let senha = formCadastro.senha;
    let confirmSenha = formCadastro.confirmSenha;
    let campos = [nome,sobrenome,email];

    if(campos.map( campo => campo.value ='')) {
        alert('Existem campos a serem preenchidos corretamente');
        return false;
    } else if(senha.value === '') {
        alert('Preencha sua Senha');
        return false;
    }else if(confirmSenha !== senha) {
        alert('Suas senhas não são iguais');
        return false;
    } else {
        formCadastro.submit()
    }
}
