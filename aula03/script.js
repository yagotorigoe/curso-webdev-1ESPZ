function saudacao(nome) {
  return `Olá, ${nome}!`;
}

console.log(saudacao("Lucas")); // Saída: Olá, Lucas!

// -----------------------------------------------

// A função "saudar" é declarada e sofre hoisting.
function saudar(nome) {
  // Retorna uma mensagem personalizada
  return `Olá, ${nome}! Bem-vindo ao TaskMaster.`;
}

const mensagem = saudar("Maria");
console.log(mensagem); // Saída: Olá, Maria! Bem-vindo ao TaskMaster.

// -----------------------------------------------

// Vai gerar erro: Cannot access 'despedir' before initialization
console.log(despedir("João"));

const despedir = function(nome) {
  // Retorna mensagem de despedida
  return `Até logo, ${nome}! Volte sempre ao TaskMaster.`;
};

// -----------------------------------------------

// A função "somarDeclarada" pode ser chamada antes de sua definição
console.log(somarDeclarada(5, 3)); // Saída: 8

function somarDeclarada(a, b) {
  return a + b;
}

// -----------------------------------------------

// Função que exibe detalhes de uma tarefa
function exibirTarefa(id, titulo, prioridade) {
  console.log(`Tarefa #${id}: ${titulo} (Prioridade: ${prioridade})`);
}
exibirTarefa(1, "Estudar JavaScript", "alta");

// Função com valores padrão para parâmetros não informados
function criarTarefa(titulo, descricao = "Sem descrição", 
                     prioridade = "média", concluida = false) {
  return {
    id: Date.now(), // Gera um ID único com base no timestamp
    titulo,
    descricao,
    prioridade,
    concluida,
    criada: new Date()
  };
}

const tarefa = criarTarefa("Estudar funções");
console.log(tarefa);

// -----------------------------------------------

// Função que calcula estatísticas básicas de um array de números
function calcularEstatisticas(numeros) {
  let soma = 0;
  let min = numeros[0];
  let max = numeros[0];
  
  // Itera pelo array para acumular a soma e atualizar os valores de min e max
  for (let i = 0; i < numeros.length; i++) {
    soma += numeros[i];
    if (numeros[i] < min) {
      min = numeros[i];
    }
    if (numeros[i] > max) {
      max = numeros[i];
    }
  }
  
  const media = soma / numeros.length;
  
  // Retorna os resultados em um objeto
  return { soma, media, min, max };
}

const resultados = calcularEstatisticas([5, 10, 15, 20, 25]);
console.log(resultados);

// -----------------------------------------------

// Função para formatar uma data no formato "DD/MM/AAAA"
function formatarData(data, formato = 'curto') {
  // Converte para objeto Date, se necessário
  if (!(data instanceof Date)) {
    data = new Date(data);
  }
  // Verifica se a data é válida
  if (isNaN(data.getTime())) {
    return "Data inválida";
  }
  const dia = data.getDate().toString().padStart(2, '0');
  const mes = (data.getMonth() + 1).toString().padStart(2, '0');
  const ano = data.getFullYear();
  
  if (formato === 'curto') {
    return `${dia}/${mes}/${ano}`;
  }
  // Outros formatos podem ser implementados aqui...
  return `${dia}/${mes}/${ano}`;
}
console.log("Data formatada:", formatarData(new Date()));

// -----------------------------------------------

// Arrow function que retorna a subtração de dois números
const subtrair = (a, b) => a - b;
console.log("Subtração:", subtrair(20, 5));

// -----------------------------------------------

// Utilizando arrow function para dobrar os elementos de um array
const numeros = [1, 2, 3, 4, 5];
const dobrados = numeros.map(n => n * 2);
console.log("Números dobrados:", dobrados);

// -----------------------------------------------

// Demonstração de "this" em função tradicional vs. arrow function
const contador = {
  valor: 0,
  incrementarTradicional: function() {
    setTimeout(function() {
      // Neste caso, "this" não se refere ao objeto "contador"
      console.log("Valor (tradicional):", this.valor);
    }, 100);
  },
  incrementarArrow: function() {
    setTimeout(() => {
      // A arrow function preserva o contexto do objeto "contador"
      this.valor++;
      console.log("Valor (arrow):", this.valor);
    }, 100);
  }
};
contador.incrementarTradicional();
contador.incrementarArrow();

// -----------------------------------------------

// IIFE: Função definida e executada imediatamente
(function() {
  // Variáveis aqui são locais e não poluem o escopo global
  const a = 1;
  const b = 2;
  console.log("Resultado da IIFE (a + b):", a + b);
})();

// -----------------------------------------------

// Função que cria um contador privado utilizando closure
function criarContador() {
  let contador = 0; // Variável privada
  return {
    incrementar: function() {
      contador++;
      return contador;
    },
    valor: function() {
      return contador;
    }
  };
}

const meuContador = criarContador();
console.log("Contador:", meuContador.incrementar()); // 1
console.log("Contador:", meuContador.incrementar()); // 2

// -----------------------------------------------

// Função que recebe um array e um callback para filtrar os elementos
function filtrarTarefas(tarefas, callback) {
  return tarefas.filter(callback);
}

const tarefas = [
  { id: 1, titulo: "Estudar JS", concluida: false },
  { id: 2, titulo: "Implementar TaskMaster", concluida: true }
];
const pendentes = filtrarTarefas(tarefas, t => !t.concluida);
console.log("Tarefas pendentes:", pendentes.length);

// -----------------------------------------------

// Função recursiva que calcula o fatorial de um número
function fatorial(n) {
  if (n === 0 || n === 1) return 1;  // Caso base
  return n * fatorial(n - 1);        // Chamada recursiva
}
console.log("Fatorial de 5:", fatorial(5));

// -----------------------------------------------

// Função construtora para criar uma tarefa
function Tarefa(titulo, descricao, prioridade) {
  this.id = Date.now();
  this.titulo = titulo;
  this.descricao = descricao || "";
  this.prioridade = prioridade || "média";
  this.concluida = false;
  this.criada = new Date();
}
// Método para marcar a tarefa como concluída
Tarefa.prototype.concluir = function() {
  this.concluida = true;
  return `Tarefa "${this.titulo}" concluída!`;
};

// Função construtora para tarefas recorrentes (herda de Tarefa)
function TarefaRecorrente(titulo, descricao, prioridade, frequencia) {
  Tarefa.call(this, titulo, descricao, prioridade);
  this.frequencia = frequencia;
}
TarefaRecorrente.prototype = Object.create(Tarefa.prototype);
TarefaRecorrente.prototype.constructor = TarefaRecorrente;

const tarefaRecorrente = new TarefaRecorrente("Backup", "Backup semanal", "média", "semanal");
console.log(tarefaRecorrente.concluir());

// -----------------------------------------------

// Função de memoização que utiliza cache para evitar cálculos repetidos
function memoize(fn) {
  const cache = {};
  return function(...args) {
    const key = JSON.stringify(args);
    if (cache[key]) {
      return cache[key];
    }
    const result = fn(...args);
    cache[key] = result;
    return result;
  };
}

// Função recursiva para calcular Fibonacci
function calcularFibonacci(n) {
  if (n <= 1) return n;
  return calcularFibonacci(n - 1) + calcularFibonacci(n - 2);
}
const fibonacciMemoizado = memoize(calcularFibonacci);
console.log("Fibonacci memoizado (n=10):", fibonacciMemoizado(10));