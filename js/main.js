// const numbers = [1,2,3,4,5]
// // console.log(numbers)

// numbers.unshift(-1,0)//wpisujemy -1, 0 na poczatek tablicy

// numbers.shift()//wycinamy element na poczatku tablicy

// const colors = ['red', 'green', 'blue']

// colors.push('gold')//push dodaje elementy na koncu tablicy

// colors.pop()//usuwamy osatni element tavlicy

// function multiply(x) {
//     return x*2
// }
// console.log(multiply(2));

// const newNumbers=numbers.map(multiply)
// console.log(numbers)
// console.log(newNumbers)

// numbers.push(6,7,8)

// const abc =['a','b','c']

// const newAbc= numbers.concat(abc)
// // console.log(newAbc)

// //spread - ...

// console.log(...abc)

// const drinks =['pepsi', 'kawa', 'sok']
// const meals = ['schabowy', 'spaghetti', 'zupa' ]

// const menu = [...drinks, ...meals]
// console.log(menu)

// const numbers = [0, 0, 1, 1, 2, 2, 2]
// const colors = ['red', 'green', 'blue', true, 123]
// const cars = [123, true, 'audi', 'bmw', 'mercedes', 'ferrari', '🤷‍♂️', '👀']

// const numbers2 = numbers.slice(0,2)

// console.log(numbers2)

// const numbers3 = numbers.slice(-3)

// console.log(numbers3)
// console.log(numbers)

// const randomStuff = colors.splice(-2)
// console.log(randomStuff)
// console.log(colors )

// console.log(cars.splice(2,4))
// console.log(cars)
//
// const numbers =[0, 23, 40, 165, 2, 44, 11]

// function number(x) {
//     return x>50

// }
// // console.log(numbers.filter(number))

// numbers.forEach(item => {
//     console.log(item)
// });

// console.log(numbers.includes(23))
// console.log(numbers.indexOf(44))

// const newTab = numbers.forEach(item => {
//   (item*2)
// });
// console.log(newTab)

// const mapTab = numbers.map(item =>(item*2) )
// console.log(mapTab)

// const letters=['c', 'd']
// letters.unshift('a', 'b')
// letters.push('e', 'f')

// console.log(letters)

// console.log(letters.includes('c'))

// const autoBrands = 'audi, mercedes, nissan, dodge'

// const autoTab = autoBrands.split(', ')

// if(autoTab.length > 3)
// {
//     console.log('Jest OK')
// }else{
//     console.log('nie jest ok')
// }

// if(autoTab.includes('audi')==true){
//     autoTab.unshift('seat')
//     console.log(autoTab)
// }else{
//     autoTab.pop();
//     console.log(autoTab)
// }

// function test (){
//     console.log('czesc')
// }
// test()

// const hello = (name = ' drogi uzytkowniku') => {

//     console.log(`czesc ${name}, jak sie masz?`)
// }
// hello()

// const add = (x = 7, y = 9) => {
//     console.log(x+y)
// }
// // add(10)

// const arr=[1,2,3]
// console.log(arr)
// console.log(...arr)

// //rest

// const numbers = (x,y, ...z) => {
//     console.log(x,y,z)
// }
// numbers(12,32,123,21,312,32,1,31,3,1,3,13,43,45,54)
// let celsius =0
// let temp =0

// const fahrenheit = (item) => {
//     return result = item*1,8+32
// }
// // temp = fahrenheit(celsius=10)

// // console.log( `${celsius}*C =  ${temp}*F`)

// let num = 10
// const numbers = []
// for (let i = 0; i <= num; i++) {
// 	numbers.push(i)
// }

// console.log(numbers)

// const divideByThree = item => {
// 	item % 3 === 0 ? console.log(`${item} jest podzielny przez 3`) : console.log(`${item} nie jest podzielny przez 3`)
// }

// console.log(numbers.forEach(divideByThree))

// //apendchild()
// const heading = document.querySelector('h1')
// const paragraph = document.querySelectorAll('p')

// const divTest = document.querySelector('div.test')
// const paraDiv = divTest.querySelector(' p#test')

// const ulList = document.createElement('ul')
// const liItem = document.createElement('li')

// liItem.textContent='czesc uzytkowniku'

// document.body.appendChild(ulList)
// ulList.appendChild(liItem)

// const divTest2 =document.querySelector('div.test2')

// divTest2.appendChild(document.createElement('p'))

// const div = document.querySelector('div')

// const headingTwo = document.createElement('h2')
// headingTwo.textContent= 'jestem naglowek 2'
// div.appendChild(headingTwo)

// ///apend()

// div.append(document.createElement('p'), headingTwo)

//innerHTML, outerHTML, textContent, innerText 80 odc. 1czjs

// const input = document.querySelector('input')
// const underInput = document.querySelector('.under-input')

// input.addEventListener('keydown', e => {
//     if(e.key === 'Enter'){
//         // <h2 style="color: red;"></h2>
//         underInput.innerHTML = input.value
//         // underInput.textContent = input.value
//     }
// })

// const ulList= document.createElement('ul')
// const body = document.querySelector('body')

// body.append(ulList)

// for(let j= 1; j<=10; j++ )
// {
// const liItem= document.createElement('li')
// ulList.append(liItem)
// liItem.textContent = j
// }

//  ulList.lastChild.classList.add('last-li')

// const square = document.querySelector('.square')
// const paragraph = document.querySelectorAll('p')
// const burgerBtn = document.querySelector('.btn1')
// const pizzaBtn = document.querySelector('.btn2')

// const textHello = () => {
//     console.log('hello')
// }
// const redColor = () => {
//     square.classList.add('red')
//     square.classList.remove('blue')
// }
// const blueColor = () => {
//     square.classList.toggle('blue')
//     square.classList.remove('red')
// }

// const addShow = () => {
//     paragraph.forEach(item => item.classList.toggle('show'))
// }

// burgerBtn.addEventListener('dblclick', textHello)
// square.addEventListener('mouseover', redColor)
// square.addEventListener('mouseout', blueColor)
// pizzaBtn.addEventListener('click', addShow)

// setTimeout(addShow, 1000)

// const colors = ['red', 'green', 'blue']
// alert('czesc')
// confirm('ja tuu tetraz?')

// const image = document.querySelector('img')

// image.setAttribute('src', 'https://cdn.pixabay.com/photo/2014/09/05/21/55/astra-436593_960_720.jpg')
// image.setAttribute('alt', 'chabry')

// const texting = () => {
//     console.log('sadsadsadsadsada')
// }
// setTimeout(texting, 2000)

// const liItems = document.querySelectorAll('li')

// for (let i=1; i<=5; i++ ){
//     liItems[i-1].textContent = i
// }

// liItems.forEach((item, index) => {
//     item.textContent = index+1
// });

// const thirdLi =document.querySelector('[data-id="3"]')
// console.log(thirdLi)
// console.log(thirdLi.closest('.wrapper'))

// const newDiv = document.createElement('div')
// newDiv.classList.add('circle', 'gold' )
// lime.appendChild(newDiv)

// const circles = document.querySelectorAll('.circle')

// circles.forEach(circle => circle.addEventListener('click', () => {
//     console.log(circle)
//   } ))

// console.log('czesc');
// console.log(window.console);

// const persons = [
//     {
//         name: 'lisa',
//         age: 24
//     },
//     {
//         name: 'andrzej',
//         age: 54
//     }
// ]

// console.table(persons)

// btn2.addEventListener('mouseover', () => {
//     console.log('najechano na mnie')
// })
// btn3.addEventListener('dblclick', test)

// const arrowBtn = document.querySelector('.arrow')
// const arrowIcon = document.querySelector('.fas')
// const img = document.querySelector('.item1')

// //nasluchiwanie na click na btn
// //dodajemy klase height
// //rotate na fas

// arrowBtn.addEventListener('click', ()=>{
//     img.classList.toggle('hide')
//     arrowIcon.style.rotate = '180deg'
//     img.classList.contains('hide') ? arrowIcon.style.rotate = '180deg' : arrowIcon.style.rotate = '0deg'
// }
// )
// const converter = document.querySelector('#converter')
// const result = document.querySelector('.result')
// const convBtn = document.querySelector('.conv')
// const resetBtn = document.querySelector('.reset')
// const changeBtn = document.querySelector('.change')
// const one = document.querySelector('.one')
// const two = document.querySelector('.two')

// let fncResult

// const convert = () => {

// 	if (one.textContent == '°C') {
// 		fncResult = converter.value * 1.8 + 32
// 	} else {
// 		fncResult = (converter.value - 32) / 1.8
// 	}
//     showResult()
// 	return fncResult
// }

// const showResult = () => {
// 	if (one.textContent === '°C') result.textContent = `${converter.value} °C to ${fncResult} °F`
// 	else result.textContent = `${converter.value} °F to ${fncResult} °C`
// }

// const changeVal = () => {
// 	if (one.textContent === '°C') {
// 		one.textContent = '°F'
// 		two.textContent = '°C'
// 	} else {
// 		two.textContent = '°F'
// 		one.textContent = '°C'
// 	}
// }
// const reset = () => {
//     result.textContent=''
//     converter.value=''
// }
// changeBtn.addEventListener('click', changeVal)
// convBtn.addEventListener('click', convert)
// resetBtn.addEventListener('click', reset)
// const icons = document.querySelector ('.burger')
// const burgerBtn = document.querySelector('.fa-bars')
// const exitBtn = document.querySelector('.fa-times')
// const navList = document.querySelector('nav ul')
// const showNav = () => {
//     navList.classList.toggle('active');
//     icons.classList.toggle('active');
//     exitBtn.classList.toggle('hide')
//     burgerBtn.classList.toggle('hide')
// }

// icons.addEventListener('click', showNav)

// const currentDay = document.querySelector('.current-day')
// const funFact = document.querySelector('.fun-fact')

// const facts = [
// 	'Krokodyl nie potrafi wystawić języka.',
// 	'Każdy człowiek spędził około pół godziny jako pojedyncza komórka.',
// 	'Dźwięk przemieszcza się 15 razy szybciej przez stal niż przez powietrze.',
// 	'Leniwce potrzebują dwóch tygodni na strawienie jedzenia.',
// 	'Goryle śpią nawet czternaście godzin dziennie.',
// 	'Język kameleona jest dwukrotnie dłuższy od jego ciała.',
// 	'Chińczycy w ciągu roku zużywają około 80 miliardów pałeczek.',
// 	'Żeby wejść na Wieżę Eiffla trzeba pokonać aż 1710 stopni.'
// ]

// const day = new Date()

// currentDay.textContent = (day.toLocaleDateString('pl', { weekday: 'long' }))

// const showRandomFact = () => {
//     const number = Math.floor(Math.random() * facts.length)
//     funFact.textContent = facts[number]
// }
// showRandomFact()

// let toDoInput
// let errorInfo
// let addBtn
// let ulList
// let newToDo

// let popup
// let popupInfo
// let todoToEdit
// let popupInput
// let popupAddBtn
// let popupCloseBtn

// const main = () => {
// 	prepareDOMElements()
// 	prepareDOMEvents()
// }

// const prepareDOMElements = () => {
// 	toDoInput = document.querySelector('.todo-input')
// 	errorInfo = document.querySelector('.error-info')
// 	addBtn = document.querySelector('.btn-add')
// 	ulList = document.querySelector('.todolist ul')

// 	//ELEMENTY POPUPA
// 	popup = document.querySelector('.popup')
// 	popupInfo = document.querySelector('.popup-info')
// 	popupInput = document.querySelector('.popup-input')
// 	popupAddBtn = document.querySelector('.popup-body .accept')
// 	popupCloseBtn = document.querySelector('.popup-body .cancel')
// }
// const prepareDOMEvents = () => {
// 	addBtn.addEventListener('click', addNewTask)
// 	ulList.addEventListener('click', checkClick)
// 	popupCloseBtn.addEventListener('click', closePopup)
// 	popupAddBtn.addEventListener('click', changeTodoText)
//     toDoInput.addEventListener('keyup', checkKeyEnter)
// }

// const addNewTask = () => {
// 	//DODAWANIE NOWEGO ELEMENTU DO TODOLISTY
// 	if (toDoInput.value != '') {
// 		newToDo = document.createElement('li')
// 		newToDo.textContent = toDoInput.value
// 		ulList.append(newToDo)
// 		errorInfo.textContent = ''
// 		toDoInput.value = ''
// 		createToolsArea()
// 	} else {
// 		errorInfo.textContent = 'Wpisz treść zadania.'
// 	}
// }

// const createToolsArea = () => {
// 	//DODAWANIE ICON DO TODOLISTY
// 	const tools = document.createElement('div')
// 	tools.classList.add('tools')

// 	const confirmBtn = document.createElement('button')
// 	confirmBtn.innerHTML = '<i class="fas fa-check"></i>'
// 	confirmBtn.classList.add('complete')

// 	const editBtn = document.createElement('button')
// 	editBtn.textContent = 'EDIT'
// 	editBtn.classList.add('edit')

// 	const deleteBtn = document.createElement('button')
// 	deleteBtn.innerHTML = '<i class="fas fa-times"></i>'
// 	deleteBtn.classList.add('delete')
// 	tools.append(confirmBtn, editBtn, deleteBtn)

// 	newToDo.appendChild(tools)
// }
// const checkClick = e => {
// 	//SPRAWDZANIE PRZYCISKU KTORY ZOSTAL KNIKNIETY
// 	if (e.target.matches('.complete')) {
// 		e.target.closest('li').classList.toggle('completed')
// 		e.target.classList.toggle('completed')
// 	} else if (e.target.matches('.edit')) {
// 		editToDo(e)
// 	} else if (e.target.matches('.delete')) {
// 		deleteToDo(e)
// 	}
// }

// const editToDo = event => {
// 	//POKANIE SIE POPUPA DO EDYCJI TASKU
// 	popup.style.display = 'flex'
// 	todoToEdit = event.target.closest('li')
// 	popupInput.value = todoToEdit.firstChild.textContent
// }

// const closePopup = () => {
// 	//ZAMKNIECIE SIE POPUPA DO EDYCJI TASKU
// 	popup.style.display = 'none'
// 	popupInfo.textContent = ''
// }

// const changeTodoText = () => {

// 	//EDYCJA TEXTU TASKA ('li')
// 	if (popupInput.value !== '') {
// 		todoToEdit.firstChild.textContent = popupInput.value
// 		closePopup()
// 	} else {
// 		popupInfo.textContent = 'Musisz podać jakąś treść'
// 	}
// }

// const deleteToDo = e => {
// 	e.target.closest('li').remove()
// 	const allTodos = ulList.querySelectorAll('li')
// 	if (allTodos.length === 0) {
// 		errorInfo.textContent = 'Brak zadań na liście.'
// 	}
// }
// const checkKeyEnter = e =>{
//     if(e.key === 'Enter'){
//         addNewTask();
//     }
// }

// document.addEventListener('DOMContentLoaded', main)

// const user = {
// 	name: 'Andrzej',
// 	age: 45,
// 	favColor: 'gold',
// 	showName() {
// 		console.log(user.name)
// 	}
// }
// function User (name, age){ ///konstruktor
// 	this.name = name
// 	this.age = age

// }

// const newUser = new User('Klaudia', 23)
// const newUser2 = new User('Andzrej', 33)
// console.log(newUser, newUser2)

// User.prototype.hello = function(){
// 		console.log(`czesc ${this.name}`)
// }

// newUser.hello()
// class Animal {
// 	constructor(name) {
// 		this.name = name
// 	}
// 	sound(){
// 		console.log('Zwierzak robi "hau hau"')
// 	}
// }
// class Dog extends Animal {
// 	constructor(name, age){
// 		super(name)
// 		this.age = age
// 	}
// }
// class Cat extends Animal {
// 	constructor(name){
// 		super(name)
// 	}
// 	sound(){
// 		console.log('Zwierzak robi miau miau')
// 	}
// }

// const dog = new Dog('Drops', 7)
// const cat = new Cat('Franek')
// dog.sound()
// console.log(dog)
// cat.sound()

const person = {
	name: 'Lily',
	age: 23,
	job: 'Slaughter',
	car: {
		brand: 'Audi',
		model: 'Viper',
	},
}
const showInfo = ({ name, age, job }) => {
	console.log(`${name} pracuje jako ${job} i ma ${age} lata`)
}
const showInfo2 = ({ car: { brand, model } }) => {
	console.log(`Jezdzi ${brand}, modelem ${model}.`)
}
const showInfo3 = ({ car: { brand, model } }) => {
	console.log(`Jezdzi ${brand}, modelem ${model}.`)
}
showInfo(person)
showInfo2(person)

const btn = document.querySelector('button')
const image = document.querySelector('img')

const URL = 'https://dog.ceo/api/breeds/image/random'

btn.addEventListener('click', () => {
	fetch(URL)
		.then(res => res.json())
		.then(data => image.setAttribute('src', data.message))
		.catch(err => console.log(err))
	console.log(fetch(URL))
})

const test = new Promise((resolve, reject) => {
	if (true) {
		resolve('jest ok')
	} else {
		reject('jest nie ok')
	}
})
test.then(info => console.log(info))
.catch(err => console.log(err))

async function test (){
	await checkAge(22)
	await doubleCheck()
}