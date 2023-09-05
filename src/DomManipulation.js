import { editarQuantidade } from "./ControleLogico.js";

export const atualizaTelaEstoque = (listaDeProdutos,main) =>{

    main.innerHTML="";
    for (let produto of listaDeProdutos){
        let aux=document.createElement('div');
        aux.classList.add('card');
        aux.innerHTML=`
                        <div class="cardName">
                            ${produto.nome}
                        </div>
                        <div class="cardDescription">
                            <h2>Quantidade: ${produto.quantidade}</h2>
                            <h2>Extravio: ${produto.extravio}</h2>
                            <h2>Reposição Min: ${produto.rep30}</h2>
                        </div>
        `
        main.appendChild(aux);
    }

}

export const atualizaTelaEditarQuantidade = (listaDeProdutos,main) =>{
    main.innerHTML="";
    
    for (let produto of listaDeProdutos){
        let aux=document.createElement('div');
        aux.classList.add('card');
        aux.innerHTML=`
                        <div class="cardName">
                            ${produto.nome}
                        </div>
                        <div class="cardDescription">
                            <h2>Quantidade: ${produto.quantidade}</h2>
                            <label for='novaquantidade${produto.nome}'>Nova Quantidade</label>
                            <input type="number" name='novaquantidade${produto.nome}' id='novaquantidade${produto.nome}'>
                            <button id='${produto.nome}'>Submit</button>
                        </div>
        `
        
        main.appendChild(aux);
        let button=document.getElementById(`${produto.nome}`);
        button.addEventListener('click',(event)=>{
            let x=document.getElementById(`novaquantidade${event.target.id}`);
            editarQuantidade(event.target.id,x.value,listaDeProdutos,main);
        })
    }
}

