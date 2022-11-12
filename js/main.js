const incomeSection = document.querySelector('.income-area')
const expenseSection = document.querySelector('.expenses-area')
const availableMoney = document.querySelector('.available-money')
const addTransactionPanel = document.querySelector('.add-transaction-panel')
const nameInput = document.querySelector('#name')
const amountInput = document.querySelector('#amount')
const categorySelect = document.querySelector('#category')

const addTransactionBtn = document.querySelector('.add-transaction')
const saveBtn = document.querySelector('.save')
const cancelBtn = document.querySelector('.cancel')
const deleteBtn = document.querySelector('.delete')
const deleteAllBtn = document.querySelector('.delete-all')

let root = document.documentElement;
let ID = 0;
let categoryIcon
let selectedCategory
let moneyArr = [0]
const showPanel = () => {
	addTransactionPanel.style.display = 'flex'
}
const closePanel = () => {
	addTransactionPanel.style.display = 'none'
	clearInputs()
}
const checkForm = () => {
	
	if(nameInput.value !== '' && amountInput.value != '' && categorySelect.value !== 'none'){
		createNewTransaction()
	}else{
		alert('wypelnij wszystkie pola')
	}
}
const clearInputs = () => {
		nameInput.value = ''
		amountInput.value = ''
		categorySelect.value = 'none'
}
const createNewTransaction = () => {
		const newTransaction = document.createElement('div')
		newTransaction.classList.add('transaction')
		newTransaction.setAttribute('id', ID)
		checkCategory(selectedCategory)
		
		newTransaction.innerHTML =  `<p class="transaction-name">${categoryIcon} ${nameInput.value}</p>
		<p class="transaction-amount">${amountInput.value} <button class="delete" onclick = deleteTransaction(${ID}) ><i class="fas fa-times"></i></button></p>`

		amountInput.value > 0 ? (incomeSection.append(newTransaction), newTransaction.classList.add('income')) : 
		(expenseSection.append(newTransaction), newTransaction.classList.add('expense'))

		moneyArr.push(+amountInput.value)
		closePanel();
		ID++;
		clearInputs()	
		countMoney(moneyArr)
}
const selectCategory = () => {
	selectedCategory = categorySelect.options[categorySelect.selectedIndex].text
}
const checkCategory = (transaction) => {
	
	switch(transaction){
		case'[ + ] Przychód': categoryIcon= '<i class="fas fa-money-bill-wave"></i>'
		break;
		case'[ - ] Zakupy': categoryIcon ='<i class="fas fa-cart-arrow-down"></i>'
		break;
		case'[ - ] Jedzenie': categoryIcon ='<i class="fas fa-hamburger"></i> '
		break;
		case'[ - ] Kino': categoryIcon ='<i class="fas fa-film"></i> '
		break;
	}	
}

const deleteTransaction = (idToDel) => {
	const transactionToDel = document.getElementById(idToDel)
	console.log(transactionToDel.childNodes)
	const transactionAmount = transactionToDel.childNodes[2].innerText
	
	const indexOfTransaction = moneyArr.indexOf(transactionAmount)
	moneyArr.splice(indexOfTransaction,1)
	transactionToDel.classList.contains('income') ? incomeSection.removeChild(transactionToDel) : 
	expenseSection.removeChild(transactionToDel)
	countMoney(moneyArr)
}
const deleteAllTransaction = () => {
	incomeSection.innerHTML = '<h3>Przychód:</h3>'
	expenseSection.innerHTML = '<h3>Wydatki:</h3>'
	moneyArr = [0]
	availableMoney.textContent = '0zł'
}



const countMoney = (money) => {
	const newMoney = money.reduce((a,b)=> a+b)
	availableMoney.textContent = newMoney
}

const changeStyleToLight = () => {
	root.style.setProperty('--first-color', '#F9F9F9')
	root.style.setProperty('--second-color', '#14161F')
	root.style.setProperty('--border-color', 'rgba(0, 0, 0, .2)')
	
}
const changeStyleToDark = () => {
	root.style.setProperty('--first-color', '#14161F' )
	root.style.setProperty('--second-color', '#F9F9F9')
	root.style.setProperty('--border-color', 'rgba(255, 255, 255, .4)')
	
}

const lightBtn = document.querySelector('.light')
const darkBtn = document.querySelector('.dark')
addTransactionBtn.addEventListener('click', showPanel)
cancelBtn.addEventListener('click', closePanel)
saveBtn.addEventListener('click', checkForm)
deleteAllBtn.addEventListener('click', deleteAllTransaction)
lightBtn.addEventListener('click', changeStyleToLight)
darkBtn.addEventListener('click', changeStyleToDark)