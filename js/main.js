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
const icons = document.querySelector ('.burger')
const burgerBtn = document.querySelector('.fa-bars')
const exitBtn = document.querySelector('.fa-times')
const navList = document.querySelector('nav ul')
const showNav = () => {
    navList.classList.toggle('active');
    icons.classList.toggle('active');
    exitBtn.classList.toggle('hide')
    burgerBtn.classList.toggle('hide')
}

icons.addEventListener('click', showNav)

