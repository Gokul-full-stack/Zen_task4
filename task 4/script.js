const balance = document.getElementById("balance");
const description = document.getElementById("desc");
const amount = document.getElementById("amount");
const inc_amt = document.getElementById("inc-amt");
const exp_amt = document.getElementById("exp-amt");
const trans = document.getElementById("trans");
const form = document.getElementById("form");

let transactions = JSON.parse(localStorage.getItem("transactions")) || [];

function loadTransactions() {
  trans.innerHTML = "";
  filterTransactions();
  updateAmounts();
}

function updateAmounts() {
  const amounts = transactions.map((transaction) => transaction.amount);
  const total = amounts.reduce((acc, amt) => acc + amt, 0).toFixed(2);
  const income = amounts.filter((amt) => amt > 0).reduce((acc, amt) => acc + amt, 0).toFixed(2);
  const expense = amounts.filter((amt) => amt < 0).reduce((acc, amt) => acc + amt, 0).toFixed(2);

  balance.textContent = `₹ ${total}`;
  inc_amt.textContent = `₹ ${income}`;
  exp_amt.textContent = `₹ ${Math.abs(expense)}`;
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const desc = description.value.trim();
  const amt = parseFloat(amount.value.trim());
  if (desc === "" || isNaN(amt)) return alert("Enter valid details.");

  const transaction = { id: Date.now(), description: desc, amount: amt };
  transactions.push(transaction);
  saveToLocalStorage();
  loadTransactions();
  resetForm();
});

function deleteTransaction(id) {
  transactions = transactions.filter((transaction) => transaction.id !== id);
  saveToLocalStorage();
  loadTransactions();
}

function editTransaction(id) {
  const transaction = transactions.find((transaction) => transaction.id === id);
  description.value = transaction.description;
  amount.value = transaction.amount;
  deleteTransaction(id);
}

document.querySelectorAll('input[name="filter"]').forEach((radio) => {
  radio.addEventListener("change", filterTransactions);
});

function filterTransactions() {
  trans.innerHTML = "";
  const filter = document.querySelector('input[name="filter"]:checked').value;
  transactions
    .filter((transaction) =>
      filter === "all"
        ? true
        : filter === "income"
        ? transaction.amount > 0
        : transaction.amount < 0
    )
    .forEach(displayTransaction);
}

function displayTransaction(transaction) {
  const item = document.createElement("li");
  item.classList.add(transaction.amount > 0 ? "inc" : "exp");
  item.innerHTML = `
    ${transaction.description}
    <span>${transaction.amount > 0 ? "+" : "-"}₹${Math.abs(transaction.amount)}</span>
    <button class="btn-edit" onclick="editTransaction(${transaction.id})">
  <i class="fas fa-pen-nib"></i> <!-- correct prefix -->
</button>
<button class="btn-del" onclick="deleteTransaction(${transaction.id})">
  <i class="fas fa-trash-alt"></i>
</button>`;
  trans.appendChild(item);
}

function saveToLocalStorage() {
  localStorage.setItem("transactions", JSON.stringify(transactions));
}

function resetForm() {
  description.value = "";
  amount.value = "";
}

window.onload = loadTransactions;
