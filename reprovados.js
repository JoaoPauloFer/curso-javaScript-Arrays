const nomes = ["Ana", "Marcos", "João", "Paulo"]
const notas = [7, 4.5, 10, 9]

const reprovados = nomes.filter((nome, indice)=>notas[indice] < 5 )

console.log(`Reprovados: ${reprovados}`)

const valorDeCarros = [
    {marca:"BMW", valor:90000},
    {marca:"Mercedes", valor:100000},
    {marca:"Chevrolet", valor:25000},
    {marca:"Nissan", valor:30000},
    {marca:"Jeep", valor:100000}
]

const valoresNaFaixa = valorDeCarros.filter((valor)=>
valor.valor < 50000)

console.log(valoresNaFaixa)