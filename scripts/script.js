
let Tarefas = [];

function salvarCompromisso(){

    var CompromissInput = document.getElementById("idInput").value;    

    Tarefas.push(CompromissInput);    

    exibirTarefas();

    document.querySelector('.inputClass').value = '';
    
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

    if (itemsRecuperados != null){

        Tarefas = JSON.parse(itemsRecuperados);
        exibirTarefas();
    }
        

}

function  apagarRepository(){

    localStorage.clear();


}