async function listarProdutos() {
  const res = await fetch('https://66429d3a3d66a67b3437cdb2.mockapi.io/products');
  
  const produtos = await res.json();
  const ul = document.getElementById("lista-produtos");
  ul.innerHTML = "";

  produtos.forEach(p => {
    const li = document.createElement("li");
    li.innerHTML = `
      <p>${p.id}</p>
      <img src="${p.image}" width="50">
      <strong>${p.name}</strong> - R$ ${p.price} <em>(${p.seller})</em>
    `;
    ul.appendChild(li);
  });
}

listarProdutos();

