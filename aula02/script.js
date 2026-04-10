let a = 5, b = 10;

console.log(a == b);   // false (igualdade)
console.log(a === b);  // false (igualdade estrita)
console.log(a != b);   // true (diferente)
console.log(a !== b);  // true (diferente estrito)
console.log(a < b);    // true (menor que)
console.log(a > b);    // false (maior que)
console.log(a <= b);   // true (menor ou igual)
console.log(a >= b);   // false (maior ou igual)

// -------------------------------------------------

let idade = 25;
let temCarteira = true;

// AND (&&) - ambas condições devem ser verdadeiras
if (idade >= 18 && temCarteira) {
  console.log("Pode dirigir");
}

// OR (||) - pelo menos uma condição deve ser verdadeira
if (idade < 18 || !temCarteira) {
  console.log("Não pode dirigir");
}

// NOT (!) - inverte o valor booleano
if (!temCarteira) {
  console.log("Precisa de carteira");
}

// -------------------------------------------------

let tarefaConcluida = true;

if (tarefaConcluida) {
  console.log("A tarefa está concluída!");
}

// -------------------------------------------------

if (prioridade === 1) {
  console.log("Prioridade Baixa");
} else if (prioridade === 2) {
  console.log("Prioridade Média");
} else if (prioridade === 3) {
  console.log("Prioridade Alta");
} else {
  console.log("Prioridade desconhecida");
}

// -------------------------------------------------

let diaSemana = new Date().getDay(); // 0: Domingo, 1: Segunda, etc.

switch (diaSemana) {
  case 0:
    console.log("Domingo");
    break;
  case 1:
    console.log("Segunda-feira");
    break;
  // ...
  default:
    console.log("Dia inválido");
    break;
}

// -------------------------------------------------

for (let i = 0; i < 5; i++) {
  console.log("Contagem:", i);
}

// -------------------------------------------------

let contador = 0;
while (contador < 5) {
  console.log("Contagem:", contador);
  contador++;
}

// -------------------------------------------------

let numero = 5;
do {
  console.log("Número é:", numero);
  numero--;
} while (numero > 0);

// -------------------------------------------------

let pessoa = { nome: "João", idade: 30, cidade: "São Paulo" };

for (let propriedade in pessoa) {
  console.log(propriedade + ": " + pessoa[propriedade]);
}
// nome: João
// idade: 30
// cidade: São Paulo

// -------------------------------------------------

let frutas = ["maçã", "banana", "laranja"];

for (let fruta of frutas) {
  console.log(fruta);
}
// maçã
// banana
// laranja

// -------------------------------------------------

// break - sai do loop completamente
for (let i = 0; i < 10; i++) {
  if (i === 5) break;
  console.log(i); // 0, 1, 2, 3, 4
}

// continue - pula para a próxima iteração
for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) continue;
  console.log(i); // 1, 3, 5, 7, 9 (apenas ímpares)
}
