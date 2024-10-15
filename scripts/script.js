
let Tarefas = [];

function salvarCompromisso(){

    var CompromissInput = document.getElementById("idInput").value;
    
    Tarefas.push(CompromissInput);    

    exibirTarefas();
    
}

function exibirTarefas(){

    let items = '';

    Tarefas.forEach(element => {
        
         items += `${element} ` + "<p></p>"   ;

    });

    document.getElementById("pExibe").innerHTML = items;

}

function guardarItems(){

        const arquivo = JSON.stringify(Tarefas);
        localStorage.setItem("Repository", arquivo);
        

}

function recuperarItems(){

    let itemsRecuperados = localStorage.getItem("Repository");

    console.log(itemsRecuperados);

}

function  apagarRepository(){

    localStorage.clear();


}