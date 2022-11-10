const input = document.querySelector('input')
const ball = document.querySelector('img')
const errorText= document.querySelector('.error')
const answerText= document.querySelector('.answer')

const answersArr = ['Może', 'tak', 'nie', 'Nie chcesz znac odpowiedzi na to pytanie', 'Ciezko powiedziec...']

const checkInput = () => {
	if(input.value != '' && input.value.slice(-1) === '?'){
		generateAnswer();
	}else if(input.value.slice(-1) !== '?' && input.value != ''){
		showErrorQuestion()
	}else{
		errorText.classList.add('show')
		errorText.textContent = 'Zadaj jakies pytanie'
	}
}
const showErrorQuestion = () => {
	errorText.textContent ='Zadaj pytanie, konczące sie znakiem zapytania'
	errorText.classList.add('show')
	answerText.textContent = ''
}
const shakeBall = () => {
	ball.classList.add('play-animation')
	setTimeout(()=>{ball.classList.remove('play-animation')}, 1000)
}



const generateAnswer = () => {
	
	errorText.textContent=''
	shakeBall();
	
	setTimeout(()=>{
	const answer = answersArr[Math.floor(Math.random()*5)]
	answerText.innerHTML = `<span>Odpowiedź:</span> ${answer}`
	answerText.classList.add('show')
	
	},1000)
	
}

ball.addEventListener('click', ()=>{
	checkInput();
} )

