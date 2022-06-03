const notas = [10, 9, 8, 7, 6]

const notasAtualizadas = notas.map( nota => {
    return nota == 10 ? nota : nota = nota + 1
})

console.log(notasAtualizadas)