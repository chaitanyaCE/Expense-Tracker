const balanceEle = document.getElementById("balance");
const incomeAmountEle = document.getElementById("income_amount");
const expenseAmountEle = document.getElementById("expense_amount");
const transactionListEle = document.getElementById("transaction_list");
const transactionFormEle = document.getElementById("transaction_form");
const descriptionEle = document.getElementById("description");
const amountEle = document.getElementById("amount");

let transactions = JSON.parse(localStorage.getItem("transactions")) || [];

transactionFormEle.addEventListener("submit", addTransaction);

function addTransaction(e) {
  e.preventDefault();

  // getting form values
  const description = descriptionEle.value.trim();
  const amount = parseFloat(amountEle.value);

  transactions.push({
    id: Date.now(),
    description,
    amount,
  });

  localStorage.setItem("transactions", JSON.stringify(transactions));

  updateTransactionList();
  updateAccountSummary();

  transactionFormEle.reset();
}

function updateTransactionList() {
  transactionListEle.innerHTML = "";

  const sortedTransactions = [...transactions].reverse();

  sortedTransactions.forEach((transaction) => {
    const transactionEle = createTransactionElement(transaction);
    transactionListEle.appendChild(transactionEle);
  });
}

function createTransactionElement(transaction) {
  const li = document.createElement("li");
  li.classList.add("transaction");
  li.classList.add(transaction.amount > 0 ? "income" : "expense");

  li.innerHTML = `
  <span>${transaction.description}</span>
  <span>${formatCurrency(transaction.amount)}
    <button class="delete_btn" onclick="removeTransaction(${transaction.id})">x</button>
  </span>
  `;

  return li;
}

function updateAccountSummary() {
  const total_balance = transactions.reduce(
    (acc, transaction) => acc + transaction.amount,
    0,
  );

  const income = transactions
    .filter((transaction) => transaction.amount > 0)
    .reduce((acc, transaction) => acc + transaction.amount, 0);

  const expense = transactions
    .filter((transaction) => transaction.amount < 0)
    .reduce((acc, transaction) => acc + transaction.amount, 0);

  //update ui
  balanceEle.textContent = formatCurrency(total_balance);
  incomeAmountEle.textContent = formatCurrency(income);
  expenseAmountEle.textContent = formatCurrency(expense);
}

function formatCurrency(number) {
  return new Intl.NumberFormat("en-us", {
    style: "currency",
    currency: "CAD",
  }).format(number);
}

function removeTransaction(id) {
  //filter out the ones we need to delete
  transactions = transactions.filter((transaction) => transaction.id !== id);

  localStorage.setItem("transactions", JSON.stringify(transactions));

  updateTransactionList();
  updateAccountSummary();
}

updateTransactionList();
updateAccountSummary();
