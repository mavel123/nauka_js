const addBtn = document.querySelector('.add')
const saveBtn = document.querySelector('.save')
const cancelBtn = document.querySelector('.cancel')
const deleteBtns = document.getElementsByClassName('.delete')
const deleteAllBtn = document.querySelector('.delete-all')
const noteArea = document.querySelector('.note-area')

const notePanel = document.querySelector('.note-panel')
const category = document.querySelector('#category')
const textArea = document.querySelector('#text')	
const error = document.querySelector('.error')
let selectedValue;
let cardID = 1;

const openPanel = () => {
	notePanel.style.display = 'flex'
}
const hidePanel = () => {
	notePanel.style.display = 'none'
	error.style.visibility = 'hidden'
	textArea.value = ''
	category.selectedIndex= 0
}
const addNote = () => {
	if(textArea.value != '' && category.options[category.selectedIndex].value != 0){
		error.style.visibility = 'hidden'
		
		createNote()
	}else{
		error.style.visibility = 'visible'
	}
}
const createNote = () => {
	const newNote = document.createElement('div')
	newNote.classList.add('note')
	newNote.setAttribute('id', cardID)
	
	newNote.innerHTML = `
	<div class="note-header">
	<h3 class="note-title">${selectedValue} #${cardID}</h3>
	<button class="delete-note" onclick='deleteNote(${cardID})'>
		<i class="fas fa-times icon"></i>
	</button>
	</div>
	<div class="note-body">
	${textArea.value}
	</div>
`	
	cardID++
	noteArea.append(newNote)
	category.selectedIndex = 0 
	textArea.value = ''
	notePanel.style.display='none'
	checkColor(newNote)
}
const selectValue = () => {
	selectedValue = category.options[category.selectedIndex].text
}
const checkColor = note => {
	switch(selectedValue){
		case 'Zakupy':
			note.style.backgroundColor = 'rgb(72,255,0)'
			break;
		case 'Praca':
			note.style.backgroundColor = 'rgb(255,243,0)'
			break;
		case 'Inne':
			note.style.backgroundColor = 'rgb(0,170,255)'
			break;
	}
}
const deleteNote = (id) => {
	const noteToDelete = document.getElementById(id)
	noteArea.removeChild(noteToDelete)
	cardID--
}
const deleteAllNotes = () => {
	noteArea.textContent = ''
	cardID = 1
}
addBtn.addEventListener('click', openPanel)
cancelBtn.addEventListener('click', hidePanel)
saveBtn.addEventListener('click', addNote)
deleteAllBtn.addEventListener('click', deleteAllNotes)