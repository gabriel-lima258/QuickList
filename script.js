const form = document.querySelector('form')
const itemInput = document.getElementById('item-input')
const itemList = document.getElementById('item-list')
const alertBox = document.querySelector(".alert")

form.addEventListener('submit', (event) => {
  event.preventDefault()
  addItem()
})

function addItem() {
  // se o valor do input nao for vazio criar novo elemento
  if (itemInput.value !== "") {
    const newItem = document.createElement("li")
    newItem.classList.add("item")

    // cria um novo elemento html
    newItem.innerHTML = `
              <input type="checkbox">
              <label>${itemInput.value}</label>
              <button class="delete-btn">🗑️</button>
          `;

    itemList.appendChild(newItem)
    // limpa o valor do input
    itemInput.value = ""
  } 
}

itemList.addEventListener('click', (event) => {
  // evento que detecta todos os clicks no btn delete
  if (event.target.classList.contains('delete-btn')) {
  // closest encontra o ancestral mais próximo que corresponde ao seletor .item
  const item = event.target.closest('.item')
  itemList.removeChild(item)

  // Exibe a caixa de alerta
  alertBox.style.display = "flex";
  // Oculta a caixa de alerta após 3 segundos
  setTimeout(function() {
  alertBox.style.display = "none";
  }, 3000);
  }
})

// Função para fechar a caixa de alerta
const closeButton = alertBox.querySelector(".close-btn");
closeButton.addEventListener("click", function() {
    alertBox.style.display = "none";
});

