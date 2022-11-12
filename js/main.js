const swapBtn = document.querySelector('.swap')
const currencyOne = document.querySelector('#currency-one')
const currencyTwo = document.querySelector('#currency-two')
const amountOne = document.querySelector('.amount-one')
const amountTwo = document.querySelector('.amount-two')
const rateInfo = document.querySelector('.rate-info')
const myHeaders = new Headers()
myHeaders.append('apikey', 'ZwFVOGLqOmFDpxZpamqOgj3q0TJtB9FF')

const requestOptions = {
	method: 'GET',
	redirect: 'follow',
	headers: myHeaders,
}
const calculate = () => {
	fetch(
		`https://api.apilayer.com/exchangerates_data/latest?symbols=${currencyTwo.value}&base=${currencyOne.value}`,
		requestOptions
	)
		.then(response => response.json())
		.then(result => {
			const currency1 = currencyOne.value
			const currency2 = currencyTwo.value
			const rate = result.rates[currency2]
			rateInfo.textContent = `1 ${currency1} = ${rate.toFixed(4)} ${currency2}`
			amountTwo.value = (amountOne.value * rate).toFixed(2)
		})
		.catch(error => console.log('error', error))
}
const handleSwap = () => {
	let bufor
	bufor = currencyOne.value
	currencyOne.value = currencyTwo.value
	currencyTwo.value = bufor
	calculate()
}

currencyOne.addEventListener('change', calculate)
currencyTwo.addEventListener('change', calculate)
amountOne.addEventListener('input', calculate)
swapBtn.addEventListener('click', handleSwap)
calculate()
