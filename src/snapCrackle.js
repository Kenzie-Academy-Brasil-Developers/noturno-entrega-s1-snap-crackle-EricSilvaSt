/* Tarefa
   Escreva uma função chamada snapCrackle que leva um parâmetro denominado: maxValue.
   Esta função deve fazer um loop de 1 até maxValue (inclusive) e montar uma string com as seguintes condições 
   para cada número:
   Se o número for ímpar, no lugar dele, concatenar "Snap" no final da string.
   Se o número for múltiplo de 5, no lugar dele, concatenar "Crackle" no final da string.
   Se o número for tanto ímpar quanto múltiplo de 5, no lugar dele, concatenar "SnapCrackle" no final da string.
   Se número não for nem ímpar e nem múltiplo de 5, concatenar o próprio número no final da string.
   Esta função deve retornar a string obtida.*/

function snapCrackle(maxValue){

    let texto = ""
    
    for (let numero = 1; numero <= maxValue; numero++){
    
        if ((numero % 2 ==0) && (numero % 5 !==0)){
        texto += numero
    }    
    
    if ((numero % 2 !==0) && (numero % 5 ==0)){
        texto += "SnapCrackle"
    }
    
    else if (numero % 2 !==0){
        texto += "Snap"
    }
    
    else if (numero % 5 ==0){
        texto += "Crackle"
    }
    
    if (numero < maxValue){
      texto += ", "
    }
}
return texto
}
snapCrackle(15)
// retornar string obtida