// const titulo = document.querySelector('h1');

// titulo.textContent = 'Novo Título'; // Altera o texto interno

// const container = document.querySelector('#container');
// console.log(container);

// const imagem = document.querySelector("img");
// console.log(imagem)
// imagem.alt = 'Avatar de Usuário';

// const caixa = document.querySelector(".box");
// console.log(caixa);

// caixa.style.backgroundColor = 'lightgreen';
// caixa.style.border = '10px solid black';

// caixa.classList.add("oculto");
// caixa.classList.remove("oculto");

// const botao = document.getElementById("meuBotao");
// console.log(botao);

// botao.addEventListener("click", () => {
//     caixa.classList.toggle("oculto")
// });

// const novoItem = document.createElement('li');
// novoItem.textContent = 'Novo item';
// document.querySelector('ul').appendChild(novoItem);
// novoItem.remove();

// const botao = document.getElementById('meuBotao');
// botao.addEventListener('click', () => {
//   alert('Você clicou no botão!');
// });

// localStorage.setItem("nome", "Joao");
// localStorage.setItem("nome", "Joao");
// localStorage.setItem("nome", "Joao");

// console.log(localStorage.getItemItem("nome"));

// localStorage.removeItem("nome");

// const usuario = {nome: "Daniel", idade: "36"}

// localStorage.setItem("usuario", JSON.stringify(usuario));

// const valorRecuperado = JSON.parse(localStorage.getItem("usuario"));

// console.log(valorRecuperado);
// console.log(valorRecuperado.nome)

let tarefas = JSON.parse(localStorage.getItem("tarefas")) || [];

function renderizarTarefas() {
  const lista = document.getElementById("lista-tarefas");
  lista.innerHTML = "";
  tarefas.forEach((t, i) => {
    const li = document.createElement("li");
    li.textContent = t;
    lista.appendChild(li);
  });
}

renderizarTarefas();

document.getElementById("form-tarefa").onsubmit = function (e) {
  e.preventDefault();
  const input = document.getElementById("input-tarefa");
  tarefas.push(input.value);
  localStorage.setItem("tarefas", JSON.stringify(tarefas));
  input.value = "";
  renderizarTarefas();
};

document.getElementById("btn-limpar").onclick = function () {
  tarefas = [];
  localStorage.removeItem("tarefas");
  renderizarTarefas();
};
