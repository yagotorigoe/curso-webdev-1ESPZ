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

// let diaSemana = new Date().getDay()

// console.log(diaSemana)
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

// nivelAcesso = 2
// if (nivelAcesso ===2) {
//     console.log("Acesso Parcial")
// } else if (nivelAcesso === 3) {
//         console.log("Acesso total")
// } else {
//     console.log("Acesso negado")
// }

// A função "saudar" é declarada e sofre hoisting.
// function saudar(nome) {
//   // Retorna uma mensagem personalizada
//   return `Olá, ${nome}! Bem-vindo ao TaskMaster.`;
// }

// const mensagem = saudar("Maria");
// console.log(mensagem); // Saída: Olá, Maria! Bem-vindo ao TaskMaster.

// Vai gerar erro: Cannot access 'despedir' before initialization
// console.log(despedir("João"));

// const despedir = function(nome) {
//   // Retorna mensagem de despedida
//   return `Até logo, ${nome}! Volte sempre ao TaskMaster.`;
// };

// A função "somarDeclarada" pode ser chamada antes de sua definição
// console.log(somarDeclarada(5, 3)); // Saída: 8

// function somarDeclarada(a, b) {
//   return a + b;
// }

// Variável declarada com var é hoisted e inicializada com undefined
// console.log(xVar); // Saída: undefined
// var xVar = 10;

// Variável declarada com let é hoisted, mas não inicializada (zona morta)
// console.log(xLet); // Erro: Cannot access 'xLet' before initialization
// let xLet = 20;

// Criação de strings
// let titulo = "Aprender JavaScript";
// let descricao = 'Estudar manipulação de strings';

// console.log("Título:", titulo);
// console.log("Descrição:", descricao);

// // Comprimento da string
// console.log("Comprimento do título:", titulo.length);

// // Acesso a caracteres individuais
// console.log("Primeiro caractere:", titulo[0]);
// console.log("Último caractere:", titulo[titulo.length - 1]);
// console.log("Caractere na posição 8:", titulo.charAt(8));

// Concatenação tradicional
// let titulo = "Aprender Javascript"
// let categoria = "Estudo";
// let infoCompleta = "Categoria: " + categoria + " - " + titulo;
// console.log("Concatenação tradicional:", infoCompleta);

// // Template strings (ES6+)
// let dataCriacao = "01/06/2025";
// let resumo = `Tarefa: ${titulo} (${categoria})
// Criada em: ${dataCriacao}
// Descrição: ${descricao}`;
// console.log("Template string:");
// console.log(resumo);

// Métodos para busca em strings
// let titulo = "Aprender JavaScript";
// let descricao = 'Estudar manipulação de strings';
// let categoria = "Estudo";
// console.log("Posição de 'JavaScript':", titulo.indexOf("JavaScript"));
// console.log("'JavaScript' está presente?", titulo.includes("JavaScript"));
// console.log("Começa com 'Aprender'?", titulo.startsWith("Aprender"));
// console.log("Termina com 'Script'?", titulo.endsWith("Script"));

// Função que trunca uma string se ela for maior que um tamanho máximo
// const truncarDescricao = (texto, maxLength = 30) => {
//   if (texto.length <= maxLength) {
//     return texto;
//   }
//   return texto.substring(0, maxLength) + "...";
// }

// let descricaoLonga = "Este é um exemplo de uma descrição muito longa que precisará ser truncada para exibição.";
// console.log("Descrição truncada:", truncarDescricao(descricaoLonga));
// console.log("Descrição truncada (20 caracteres):", truncarDescricao(descricaoLonga, 20));

// let texto = "JavaScript é incrível!";
// console.log("Original:", texto);
// console.log("slice(0, 10):", texto.slice(0, 10));      // "JavaScript"
// console.log("substring(0, 10):", texto.substring(0, 10)); // "JavaScript"

// let tags = "javascript,programação,web,frontend";
// let arrayTags = tags.split(",");
// console.log("Array de tags:", arrayTags);

// let listaTarefas = ["Estudar JS", "Criar TaskMaster", "Testar aplicação"];
// let textoTarefas = listaTarefas.join(" | ");
// console.log("Lista de tarefas formatada:", textoTarefas);

// Função para destacar um termo em um texto
// function destacarTermo(texto, termo) {
//   if (!termo) return texto;
//   const regex = new RegExp(termo, 'gi');
//   return texto.replace(regex, `**$&**`);
// }

// let busca = destacarTermo("JavaScript é uma linguagem incrível. Amo javascript!", "javascript");
// console.log("Resultado com destaque:", busca);

// Exibindo constantes
// console.log("Math.PI:", Math.PI);
// console.log("Math.E:", Math.E);

// // Cálculo da área de um círculo
// const raio = 5;
// const areaCirculo = Math.PI * Math.pow(raio, 2);
// console.log(`Área de um círculo com raio ${raio}: ${areaCirculo}`);

// 
// const numero = 9.7;
// console.log("Math.round(9.7):", Math.round(numero));
// console.log("Math.floor(9.7):", Math.floor(numero));
// console.log("Math.ceil(9.7):", Math.ceil(numero));
// console.log("Math.trunc(9.7):", Math.trunc(numero));

// const pi = Math.PI;
// console.log("Pi com 2 casas decimais:", pi.toFixed(2));


// Função para gerar número aleatório entre min e max
// function numeroAleatorioEntre(min, max) {
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// console.log("Número aleatório entre 1 e 10:", numeroAleatorioEntre(1, 10));

// Data atual
// const hoje = new Date();
// console.log("Data atual:", hoje.toString());

// // Data a partir de string ISO
// const dataISO = new Date("2025-06-15T10:30:00");
// console.log("Data a partir de string ISO:", dataISO);

// // Data a partir de componentes (mês: 0 a 11)
// const dataComponentes = new Date(2025, 5, 15, 10, 30, 0);
// console.log("Data a partir de componentes:", dataComponentes);
// Exemplo: Obtenção de Componentes e Formatação

// Função para formatar data no formato "DD/MM/AAAA"
// function formatarData(data) {
//   const dia = data.getDate().toString()(2, '0');
//   const mes = (data.getMonth() + 1).toString().padStart(2, '0');
//   const ano = data.getFullYear();
//   return `${dia}/${mes}/${ano}`;
// }

// console.log("Data formatada:", formatarData(hoje));

// Função para adicionar dias a uma data
// function adicionarDias(data, dias) {
//   const novaData = new Date(data);
//   novaData.setDate(data.getDate() + dias);
//   return novaData;
// }

// const amanha = adicionarDias(hoje, 1);
// console.log("Amanhã:", formatarData(amanha));

// Diferença entre duas datas (em milissegundos) e conversão para dias
// const dataInicial = new Date(2025, 0, 1);
// const dataFinal = new Date(2025, 11, 31);
// const diferencaMs = dataFinal - dataInicial;
// const diferencaDias = Math.ceil(diferencaMs / (1000 * 60 * 60 * 24));
// console.log("Diferença em dias:", diferencaDias);
