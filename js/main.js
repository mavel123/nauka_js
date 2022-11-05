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
// temp = fahrenheit(celsius=10)

// console.log( `${celsius}*C =  ${temp}*F`)

let num = 10
const numbers = []
for (let i = 0; i <= num; i++) {
	numbers.push(i)
}

console.log(numbers)

const divideByThree = item => {
	item % 3 === 0 ? console.log(`${item} jest podzielny przez 3`) : console.log(`${item} nie jest podzielny przez 3`)
}

console.log(numbers.forEach(divideByThree))


