$('#formulario').submit(function(){
    var nome = $('#nome');
    var nascimento = $('#nascimento'); 
    var cpf = $('#cpf');
    var erro = $('.alert');
    var campo = $('#campo-erro');

    // Remove o elemento da tela sempre que tentar submeter o formulário
    erro.addClass('d-none');
    $('.is-invalid').removeClass('is-invalid');

    // Validação do campo nome
    if(nome.val()=='') {
       erro.removeClass('d-none');
       campo.html('Nome'); // nome do campo que não foi preenchido!
       nome.focus();
       nome.addClass('is-invalid');
       return false;
    }
       // Validando o campo data de nascimento
       if(nascimento.val()=='') {
        erro.removeClass('d-none');
        campo.html(' Data de Nascimento'); // nome do campo que não foi preenchido!
        nascimento.focus();
        nascimento.addClass('is-invalid');
 
         return false;
    }
       // Validação do campo CPF
    if(cpf.val()=='') {
        erro.removeClass('d-none');
        campo.html('CPF'); // nome do campo que não foi preenchido!
        cpf.focus();
        cpf.addClass('is-invalid');
 
         return false;
    }

// Se chegar aqui pode enviar os seus dados!
   return true;
});

