const input = document.querySelector('input')
const button = document.querySelector('button')
const cityName = document.querySelector('.city-name')
const warning = document.querySelector('.warning')
const photo = document.querySelector('.photo')
const weather = document.querySelector('.weather')
const temperature = document.querySelector('.temperature')
const humidity = document.querySelector('.humidity')

const API_LINK = 'https://api.openweathermap.org/data/2.5/weather?q='
const API_KEY = '&appid=9df846a05069cf0cef57d3864c34affc'
const API_UNITS = '&units=metric'

const getWeather = () => {
	const city = input.value || 'Olsztynek'
	const URL = API_LINK + city + API_KEY + API_UNITS
	
	axios.get(URL).then(res => {
		const status = Object.assign({}, ...res.data.weather)
		cityName.textContent = res.data.name
		temperature.textContent = Math.floor(res.data.main.temp) + '°C'
		humidity.textContent = res.data.main.humidity + '%'
		weather.textContent = status.main
		setImage(status.id)
		console.log(status.id)
		warning.textContent= ''

	}).catch(()=> warning.textContent = 'wpisz poprawna nazwe miasta')
}
const setImage = (statusId) => {
	if(statusId >=200 && statusId<=232){
		photo.setAttribute('src', './img/thunderstorm.png')
	}else if(statusId >=300 && statusId<=321){
		photo.setAttribute('src', './img/drizzle.png')
	}
	else if(statusId >=500 && statusId<=531){
		photo.setAttribute('src', './img/rain.png')
	}
	else if(statusId >=600 && statusId<=622){
		photo.setAttribute('src', './img/ice.png')
	}
	else if(statusId >=700 && statusId<=781){
		photo.setAttribute('src', './img/unknown.png')
	}else if( statusId ==800){
		photo.setAttribute('src', './img/sun.png')
	}else if(statusId>800){
		photo.setAttribute('src', './img/cloud.png')
	}
}

const enterCheck = (e) => {
	if(e.key=='Enter'){getWeather(), input.value= ''}
	
}
getWeather()
button.addEventListener('click', getWeather)
input.addEventListener('keyup', enterCheck)