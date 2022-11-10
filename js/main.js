// const input = document.querySelector('input')
// const button = document.querySelector('button')
// const cityName = document.querySelector('.city-name')
// const warning = document.querySelector('.warning')
// const photo = document.querySelector('.photo')
// const weather = document.querySelector('.weather')
// const temperature = document.querySelector('.temperature')
// const humidity = document.querySelector('.humidity')

// const API_LINK = 'https://api.openweathermap.org/data/2.5/weather?q='
// const API_KEY = '&appid=9df846a05069cf0cef57d3864c34affc'
// const API_UNITS = '&units=metric'

// const getWeather = () => {
// 	const city = input.value || 'Olsztynek'
// 	const URL = API_LINK + city + API_KEY + API_UNITS

// 	axios.get(URL).then(res => {
// 		const status = Object.assign({}, ...res.data.weather)
// 		cityName.textContent = res.data.name
// 		temperature.textContent = Math.floor(res.data.main.temp) + '°C'
// 		humidity.textContent = res.data.main.humidity + '%'
// 		weather.textContent = status.main
// 		setImage(status.id)
// 		console.log(status.id)
// 		warning.textContent= ''

// 	}).catch(()=> warning.textContent = 'wpisz poprawna nazwe miasta')
// }
// const setImage = (statusId) => {
// 	if(statusId >=200 && statusId<=232){
// 		photo.setAttribute('src', './img/thunderstorm.png')
// 	}else if(statusId >=300 && statusId<=321){
// 		photo.setAttribute('src', './img/drizzle.png')
// 	}
// 	else if(statusId >=500 && statusId<=531){
// 		photo.setAttribute('src', './img/rain.png')
// 	}
// 	else if(statusId >=600 && statusId<=622){
// 		photo.setAttribute('src', './img/ice.png')
// 	}
// 	else if(statusId >=700 && statusId<=781){
// 		photo.setAttribute('src', './img/unknown.png')
// 	}else if( statusId ==800){
// 		photo.setAttribute('src', './img/sun.png')
// 	}else if(statusId>800){
// 		photo.setAttribute('src', './img/cloud.png')
// 	}
// }

// const enterCheck = (e) => {
// 	if(e.key=='Enter'){getWeather(), input.value= ''}

// }
// getWeather()
// button.addEventListener('click', getWeather)
// input.addEventListener('keyup', enterCheck)

// const cost = document.querySelector('.cost')
// const costInfo = document.querySelector('.cost-info')
// const errorInfo = document.querySelector('.error')
// const btnCount = document.querySelector('.count')
// const tipSelect = document.querySelectorAll('option')

// const checkPoles = () => {
// 	if (price.value != '' && people.value != '' && tip.value != 0) {
// 		cost.textContent = calculate(price.value, people.value, tip.value).toFixed(2)
// 		costInfo.style.display = 'block'
// 		errorInfo.textContent = ''
// 	} else {
// 		errorInfo.textContent = 'Podaj wszystkie dane.'
// 		costInfo.style.display = 'none'
// 	}
// }

// const calculate = (priceToPay, poeple, tipValue) => {
// 	return ((+priceToPay+priceToPay * tipValue) / poeple) * 1
// }

// btnCount.addEventListener('click', checkPoles)

const sendBtn = document.querySelector('.send')
const clearBtn = document.querySelector('.clear')
const popup = document.querySelector('.popup')
// const username = document.querySelector('#username')
// const password = document.querySelector('#password')
// const password2 = document.querySelector('#password2')
// const email = document.querySelector('#email')
const tab = [username, password, password2, email]
const close = document.querySelector('.close')

const showError = (input, msg) => {
	const formBox = input.parentElement
	const errorMsg = formBox.querySelector('.error-text')
	formBox.classList.add('error')
	errorMsg.textContent = msg
}

const clearError = item => {
	item.parentElement.classList.remove('error')
}

const checkForm = () => {
	tab.forEach(item => {
		if (item.value != '') {
			clearError(item)
		} else {
			showError(item, item.placeholder)
		}
	})
}
const checkInputLength = (input, min) => {
	console.log(input)
	if (input.value.length < min && input.value.length != 0) {
		showError(input, `${input.previousElementSibling.textContent.slice(0, -1)} składa się z minimum ${min} znaków`)
	}
}
const checkPass = (password, password2) => {
	if (password.value == password2.value) {
		console.log('kicikici')
	} else {
		showError(password, 'Hasla rożnia sie od siebie')
		showError(password2, 'Hasla rożnia sie od siebie')
	}
}

const checkMail = email => {
	const re =
		/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
	if (re.test(email.value)) {
		clearError(email)
	} else {
		showError(email, 'Podaj poprawny email.')
	}
}

const checkErrors = () => {
	const divBox = document.querySelectorAll('.form-box')
	let errCount = 0
	divBox.forEach(item => {
		if (item.classList.contains('error')) {
			errCount++
		}
	})
	if(errCount === 0 ){
		popup.classList.add('show-popup')
	}
}
const closePopUp = (items) => {
	popup.classList.remove('show-popup')
	items.forEach(item => {clearError(item)
		item.value = ''})
}

clearBtn.addEventListener('click', e => {
	e.preventDefault()
	tab.forEach(item => {
		item.value = ''
		clearError(item)
	})
})

sendBtn.addEventListener('click', e => {
	e.preventDefault()
	checkForm()
	checkPass(password, password2)
	checkInputLength(username, 3)
	checkInputLength(password, 8)
	checkMail(email)
	checkErrors()
})
close.addEventListener('click', (e)=> {
	e.preventDefault()
	closePopUp(tab)
	
})