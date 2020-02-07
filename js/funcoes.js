function Trocar(){
    let nome, sobrenome;

    nome=document.getElementById("nome").value;
    sobrenome=document.getElementById("sobrenome").value;

    document.getElementById("sobrenome").value = nome;
    document.getElementById("nome").value = sobrenome;
}

function CalcularMedia(){
    let valor1, valor2, valor3, media;

    valor1=document.getElementById("valor1").value;
    valor2=document.getElementById("valor2").value;
    valor3=document.getElementById("valor3").value;

    media= (parseFloat(valor1) + parseFloat(valor2) + parseFloat(valor3))/3;

    document.getElementById("resultado").innerHTML = media;
}

function InserirNaLista(){
    let nome, telefone, email;

    nome=document.querySelector("#nome").value;
    telefone=document.querySelector("#telefone").value;
    email=document.querySelector("#email").value;

    console.log(nome);
    console.log(telefone);
    console.log(email);

    let  tabela= document.querySelector (".tabela-clientes").innerHTML;
    document.querySelector(".tabela-clientes").innerHTML += "<tr>" + "<td>" + nome + "</td>"+"<td>" +telefone + "</td>" + "<td>" +email +"</td>"+ "</tr>";

    Apagar();

    document.querySelector(".mensagem").innerHTML = "<em> Cliente cadastrado com sucesso </em>"
}

function Apagar(){
        document.querySelector('nome').value="";
        document.querySelector('telefone').value="";
        document.querySelector('email').value="";
}




    
