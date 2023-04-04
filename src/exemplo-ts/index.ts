//funções
import  { MACAS_DE_CARROS } from "./exercicio3";
 
 const pesquisaMarcaCarro = ((pesquisaMarca: string):boolean | undefined => {
   
 for (let marca in MACAS_DE_CARROS) {
  
  if (marca === pesquisaMarca) return true
 
}
 })
 var marca = pesquisaMarcaCarro(process.argv[2].toUpperCase());

 console.log(marca ? `A marca: ${process.argv[2].toUpperCase()}  tem no garagem `:
 `A marca: ${process.argv[2].toUpperCase()} não tem no garagem `);



