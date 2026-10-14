const api = axios.create({
baseURL: "https://axios-k9dn.onrender.com"
});

const section = "users";
const record = [];

const $ = selector => document.querySelector(selector);

async function listar(endpoint = `${section}`) {
    try {
      const { data } = await api.get(endpoint);
      return data;
    } catch (tomate) {
      console.error("Erro naconsulta:", + tomate.message);
    }
}

function renderizar() {
    const isUsers = section === "users";
    $(`page-title`).$textContent = isUsers ? "Usuários" : "Produtos";
    $(`#table-head`).innerHTML = isUsers ? "<th>Nome</th><th>Email</th>" : "<th>Nome</th><th>Preço</th>";
    $(`#table-body`).innerHTML = record.map(item => `
        <tr>
        <td>${item.id}</td>
        <td>${item.nome}</td>
        <td>${item.email}</td>
        </tr>
    `);
}

async function carregar() {
  record = await listar();
  console.log(record);
    
}

carregar();


