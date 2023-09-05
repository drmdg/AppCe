export const Produto = (nome,quantidade,extravio=0,rep30) =>{ 

    return {
       nome,
       quantidade,
       extravio,
       rep30,
       alertaReposicao(){
            return +this.quantidade<+this.rep30;

       },
       temExtravio(){
            return this.extravio!=0;
       },
       zerado(){
            return this.quantidade==0;
       }

    }


};


export const criaListaProdutos = () =>{

    let listaDeProdutos=[];

    

    for(let i=0;i<2;i++){

        let quantidade= parseInt(Math.random()*100);
        let extravio=0;
        if(i%9==0){
            extravio=parseInt(Math.random()*20);
        }
        let rep30= parseInt(Math.random()*30);
        let aux=Produto(`produto${i}`,quantidade,extravio,rep30);
        listaDeProdutos.push(aux);
    }

    return listaDeProdutos;
    
}