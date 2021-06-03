const mysql = require ('mysql')


const connection = mysql.createConnection({
    host:'localhost',
    user:'Anderson',
    password: '12345',
    database:'formulario'
});

connection.connect(function(err){
    if(err) console.error('Erro ao conectar com BD:' + err.stack); return;
});

connection.query("INSERT INTO users(nome,data_nascimento,cpf) VALUES('Anderson', '07/07/1980', '000.345.554.90')",function(err,result){
    if(!err){
        console.log('Usuario cadastrado com sucesso!');
    }else{
       console.log('Erro ao cadastrar o usuario!');
    }

})