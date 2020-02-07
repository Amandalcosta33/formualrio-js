function VerResposta1(){
//ALTERNATIVA 1
let alternativa1 = document.querySelector("#pergunta1-resposta1").checked;
if (alternativa1 == true){
    document.querySelector(".resposta1").innerHTML = "<em> Parabens você acertou!! </em>";
} else {
    document.querySelector(".resposta1").innerHTML = "<em> Vixi errou ai irmão, A resposta certa era A </em>";
}}

function VerResposta2(){
    //ALTERNATIVA 3
    let alternativa3 = document.querySelector("#pergunta2-resposta3").checked;
    if (alternativa3 == true){
        document.querySelector(".resposta2").innerHTML = "<em> Parabens você acertou!! </em>";
    } else {
        document.querySelector(".resposta2").innerHTML = "<em> Vixi errou ai irmão, A resposta certa era A </em>";
    }}

function VerResposta3(){
        //ALTERNATIVA 1
        let alternativa1 = document.querySelector("#pergunta3-resposta1").checked;
        if (alternativa1 == true){
            document.querySelector(".resposta3").innerHTML = "<em> Parabens você acertou!! </em>";
        } else {
            document.querySelector(".resposta3").innerHTML = "<em> Vixi errou ai irmão, A resposta certa era A </em>";
        }}

function VerResposta4(){
            //ALTERNATIVA 2
            let alternativa1 = document.querySelector("#pergunta4-resposta2").checked;
            if (alternativa1 == true){
                document.querySelector(".resposta4").innerHTML = "<em> Parabens você acertou!! </em>";
            } else {
                document.querySelector(".resposta4").innerHTML = "<em> Vixi errou ai irmão, A resposta certa era A </em>";
            }}