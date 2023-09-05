import { criaListaProdutos } from "./src/Produto.js";
import { listaDeExtravio,listaDeZerados,listaRepTrinta, adicionaProduto,removerProduto,auditarProduto } from "./src/ControleLogico.js";
import { atualizaTelaEditarQuantidade,atualizaTelaEstoque } from "./src/DomManipulation.js";


const main = document.getElementsByClassName('estoqueVirtual')[0];

let listaDeProdutos=criaListaProdutos();
let aux;
let a; 
let filteredlist;
//                                      INICIALIZAÇÃO


aux=document.getElementById('estv');
aux.addEventListener('click',()=>{atualizaTelaEstoque(listaDeProdutos,main)});

aux=document.getElementById('auditoria');
aux.addEventListener('click',()=>{
    a=document.getElementsByClassName('modalAuditoria')[0];
    a.style.cssText ="display:flex";
});

aux=document.getElementById('inserir');
aux.addEventListener('click',()=>{
    a=document.getElementsByClassName('modalInserirProduto')[0];
    a.style.cssText ="display:flex";
});

aux=document.getElementById('edqnt');
aux.addEventListener('click',()=>{atualizaTelaEditarQuantidade(listaDeProdutos,main)});

aux=document.getElementById('rmv');
aux.addEventListener('click',()=>{
    a=document.getElementsByClassName('modalRemoverProduto')[0];
    a.style.cssText ="display:flex";
});

aux=document.getElementById('rep');
aux.addEventListener('click',()=>{filteredlist=listaRepTrinta(listaDeProdutos);atualizaTelaEstoque(filteredlist,main)});

aux=document.getElementById('estz');
aux.addEventListener('click',()=>{filteredlist=listaDeZerados(listaDeProdutos);atualizaTelaEstoque(filteredlist,main)});

aux=document.getElementById('extravio');
aux.addEventListener('click',()=>{filteredlist=listaDeExtravio(listaDeProdutos);atualizaTelaEstoque(filteredlist,main)});

    //                      MODAIS

aux=document.getElementById('closeModalRmvProduto');
aux.addEventListener('click',()=>{
    a=document.getElementsByClassName('modalRemoverProduto')[0];
    a.style.cssText ="display:none";
});

aux=document.getElementById('closeModalInserirProduto');
aux.addEventListener('click',()=>{
    a=document.getElementsByClassName('modalInserirProduto')[0];
    a.style.cssText ="display:none";
});

aux=document.getElementById('closeModalAuditoria');
aux.addEventListener('click',()=>{
    a=document.getElementsByClassName('modalAuditoria')[0];
    a.style.cssText ="display:none";
});

//                      PRINCIPAIS EVENTOS

aux=document.getElementById('subInserirProd');
aux.addEventListener('click',()=>{
    a=document.getElementsByClassName('modalInserirProduto')[0];
    a.style.cssText ="display:none";

    listaDeProdutos=adicionaProduto(inputProduto.value,inputQuantidade.value,inputRep30.value,listaDeProdutos,main);
    inputProduto.value="";
    inputQuantidade.value=0;
    inputRep30.value=0;
});

aux=document.getElementById('subRemoverProd');
aux.addEventListener('click',()=>{
    a=document.getElementsByClassName('modalRemoverProduto')[0];
    a.style.cssText ="display:none";

    listaDeProdutos=removerProduto(inputRmvProduto.value,listaDeProdutos,main);
    inputRmvProduto.value="";
    
});

aux=document.getElementById('subAuditoria');
aux.addEventListener('click',()=>{
    a=document.getElementsByClassName('modalAuditoria')[0];
    a.style.cssText ="display:none";

    listaDeProdutos=auditarProduto(inputAuditoriaProduto.value,inputAuditoriaQuantidade.value,listaDeProdutos,main);
    inputAuditoriaProduto.value="";
    inputAuditoriaQuantidade.value=0;
    
});





