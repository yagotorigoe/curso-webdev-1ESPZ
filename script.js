//  console.log("Mensagem normal")
// console.log("Mensagem normal");
// console.info("Informação");
// console.warn("Aviso");
// console.error("Erro");

//  console.table([
//     {
//       id: 1, tarefa: "EstudarJS"
//     },
//     {
//       id: 2, tarefa: "Praticar codigo"
//     }
//  ])

//  console.group("Grupo de logs")
//  console.log('log 1')
//  console.log('log 2')
//  console.log('log 3')
//  console.groupEnd()

// console.time("Timer")
// console.timeEnd("Timer")

// let casa = ""
// if(casa = "casa")
//     console.log("casa")
/* uwehjasdajsdnsadnsandsakdjsakdasjdksajkascnadndjsfndjndsfjsdfbsdjfsdjbsdfbjsdjfbsdfjsdfbjsdfbsdfbdsfbj */

// var antigo = "Forma antiga de declarar variáveis"

// let userName = "Maria"

// const API_URL = "url"

// let texto = "Ola"
// console.log("nome = " + texto + " tipo:"+typeof (texto))

// let numero = 42
// console.log("nome = " + numero + " tipo:"+typeof (numero))

// let isCompleted = false
// console.log(isCompleted, typeof isCompleted);

// let semValor;
// console.log("semValor="+ semValor + " tipo:" + typeof (semValor));

// let nulo = null
// console.log("nulo="+ nulo + " tipo:"typeof (nulo));

// let uniquedID = Symbol("id")
// console.log(typeof (uniquedID));
// console.log(uniquedID);

// let bigNumero = 99999999999n
// console.log("bigNumero="+ bigNumero + " tipo:" + typeof (bigNumero));

// let task = {
//     // Propriedade 1
//   id: 1,
//   // Propriedade 2
//   title: "Aprender JavaScript",
//   // Propriedade 3
//   completed: false,
//   // Propriedade 4
//   assignee: {
//     name: "João",
//     email: "joao@example.com"
//   },
//   toggleComplete() {
//     this.completed = !this.completed;
//   }
// };

// let tasks = [
    
//   let task = {
//   id: 1,
//   title: "Aprender JavaScript",
//   completed: false,
//   assignee: {
//     name: "João",
//     email: "joao@example.com"
//   },
//   },
// ]

// let hoje = new Date()
// console.log(hoje);

// let amanha = new Date("03-18-2026")
// console.log(amanha);

// let pattern = /^\+55\(\d{2}\)\d{4,5}\-\d{4}$/;  
// console.log(pattern.test("+55(11)92299-0899"));
// console.log(pattern.test("+55(11)2299-0899"));

// let a = 10;
// let b = 3;
// console.log(a + b); // 13
// console.log(a - b); // 7
// console.log(a * b); // 30
// console.log(a / b); // 3.333...
// console.log(a % b); // 1
// console.log(a ** b); // 1000

// let contador = 0;

// console.log(++contador)
// console.log(contador++)

// let idade = 16

// let status = idade >= 18 ? "Maior de idade" : "Menor de idade"

// console.log(idade)
// console.log(status)

// let valor = null

// let resultado = valor ?? "Valor padrão"

// console.log(resultado)

// let a = 5
// let b = 10
// console.log(a == b); // false
// console.log(a === b); // false
// console.log(a != b); // true
// console.log(a !== b); // true 
// console.log(a > b); // false
// console.log(a < b); //true
// console.log(a >= b); // false
// console.log(a <= b); // true

// let idade = 25
// let temCarteira = true

// if (idade >= 18 && temCarteira) {
//     console.log("Pode dirigir")
// } 

// if (idade < 18 || !temCarteira) {
//     console.log("Não pode dirigir")
// } 

// if (!temCarteira) {
//     console.log("Não pode dirigir")
// } 

// let tarefaConcluida = true

// if (tarefaConcluida) {
//     console.log("Tarefa concluída")
// }
// else {
//     console.log("Tarefa pendente")
// }

// let prioridade = 2

// if (prioridade === 3) {
//     console.log("Prioridade alta")
// } else {
//     console.log("Prioridade nao é alta")
// }

// console.log(prioridade === 3 ? "Prioridade alta" : "Prioridade nao é alta")

// if(prioridade === 1) {
//     console.log("Prioridade baixa")
// } else if (prioridade === 2) {
//     console.log("Prioridade média")
// } else if (prioridade === 3) {
//     console.log("Prioridade alta")
// } else {
//     console.log("Prioridade desconhecida")
// }

let diaSemana = new Date().getDay()

console.log(diaSemana)
// else if (diaSemana === 0) {
//     console.log("Domingo")
// } else if (diaSemana === 1) {
//     console.log("Segunda-feira")
// } else if (diaSemana === 2) {
//     console.log("Terça-feira")
// } else if (diaSemana === 3) {
//     console.log("Quarta-feira")
// } else if (diaSemana === 4) {
//     console.log("Quinta-feira") 
// } else if (diaSemana === 5) { 
//     console.log("Sexta-feira")
// } else if (diaSemana === 6) {
//     console.log("Sábado")
// }
// switch (diaSemana) {
//     case 0:
//         console.log("Domingo") 
//         break;
//     case 1:
//         console.log("Segunda-feira")
//         break;
//     case 2:
//         console.log("Terça-feira")  
//         break;
//     case 3:
//         console.log("Quarta-feira")
//         break;
//     case 4:
//         console.log("Quinta-feira") 
//         break;
//     case 5: 
//         console.log("Sexta-feira")
//         break;
//     case 6:
//         console.log("Sábado")
//         break;
//     default:
//         console.log("Dia da semana desconhecido")
//         break;
// }

// for (let i = 0; i <= 5; i++) {
//     console.log("Contagem:" + i)
// }

// let contador = 0

// while (contador >= -5) {
//     console.log("Contagem:" + contador)
//     contador--
// }

// let numero = 5 

// do {
//     console.log("Número é:" + numero)
//     numero--
// } while (numero > 0)

nivelAcesso = 2
if (nivelAcesso ===2) {
    console.log("Acesso Parcial")
} else if (nivelAcesso === 3) {
        console.log("Acesso total")
} else {
    console.log("Acesso negado")
}