import { atualizaTelaEditarQuantidade, atualizaTelaEstoque } from "./DomManipulation.js";
import { Produto } from "./Produto.js";


export const listaDeZerados = (listaDeProdutos) =>{

    const novalista=listaDeProdutos.filter((produto)=>{
        return produto.zerado();
    })
    return novalista;

}

export const listaDeExtravio = (listaDeProdutos) =>{

    const novalista=listaDeProdutos.filter((produto)=>{
        return produto.temExtravio();
    })
    return novalista;

}

export const listaRepTrinta = (listaDeProdutos) =>{

    const novalista=listaDeProdutos.filter((produto)=>{
        return produto.alertaReposicao();
    })
    return novalista;

}

export const adicionaProduto = (nome,quantidade,rep30,listaDeProdutos,main) =>{
    let aux=Produto(nome,quantidade,0,rep30);
    listaDeProdutos.push(aux);
    atualizaTelaEstoque(listaDeProdutos,main);
    return listaDeProdutos;

}

export const removerProduto = (nome,listaDeProdutos,main) =>{
    listaDeProdutos=listaDeProdutos.filter((produto)=>{
        return produto.nome!=nome;
    });
    atualizaTelaEstoque(listaDeProdutos,main);
    return listaDeProdutos;
}

export const auditarProduto = (nome,quantidade,listaDeProdutos,main) =>{
    
    for (let produto of listaDeProdutos){
        if (produto.nome==nome){
            produto.extravio=produto.extravio + (produto.quantidade - quantidade);
            produto.quantidade=quantidade;
        }
    }
    atualizaTelaEstoque(listaDeProdutos,main);
    return listaDeProdutos;

}

export const editarQuantidade = (nome,quantidade,listaDeProdutos,main) =>{
    
    for (let produto of listaDeProdutos){
        if (produto.nome==nome){
            produto.quantidade=quantidade;
        }
    }
    atualizaTelaEditarQuantidade(listaDeProdutos,main);
}