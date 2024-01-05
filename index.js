let NomeHeroi = "John O THE CALVO"
let partidas = historico
let vitorias = 129
let derrotas = 12
let soma = vitorias - derrotas
let nivel
 
function historico (vitorias, derrotas){
    soma = vitorias - derrotas
  }    

  if (soma < 10){
    nivel = "Ferro"
}
else if (soma >= 11 && soma<= 20){
    nivel = "Bronze"
}
else if (soma >= 21 && soma<= 50){
    nivel = "Prata"
}
else if (soma >= 51 && soma<= 80){
    nivel ="Ouro"
}
else if (soma >= 81 && soma<= 90){
    nivel = "Diamante"
}
else if (soma >= 91 && soma<= 100){
    nivel = "Lendário"
}
else if (soma >= 101) {
    nivel = "Imortal"
}
 
console.log ("O herói " + NomeHeroi," tem saldo de " + soma, "vitórias", "está no nível " + nivel )

