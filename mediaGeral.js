const salaJS = [7, 8, 8, 7, 10, 6.5, 4, 10, 7];
const salaJava = [6, 5, 8, 9, 5, 6];
const salaPython = [7, 3.5, 8, 9.5];

function mediaDaSala (sala){
    const notasDaSala = sala.reduce(( acumulador, valorAtual) =>
    acumulador + valorAtual, 0);
    return notasDaSala/sala.length;
}

console.log(`Média da sala de JavaScript é : ${mediaDaSala(salaJS)}`);
console.log(`Média da sala de JavaScript é : ${mediaDaSala(salaJava)}`);
console.log(`Média da sala de JavaScript é : ${mediaDaSala(salaPython)}`);

const notas = [10, 6.5, 8, 7.5];

const mediaNotas = notas.reduce((acum , atual)=>{
return  atual + acum },0)/notas.length

console.log(`A média da turma é :${mediaNotas}`)

