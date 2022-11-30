let username = document.getElementById('username')
let password = document.getElementById('password')
let form = document.getElementById('form')
let errorElement = document.getElementById('error')

//here adding EventListener so that can check all the errors after submit button pressed or bfor page is refreshed
// want it here for the submit button
form.addEventListener('submit', (e) => {
	let messages = [] 
	if(username.value == " " || username.value == null)
	//means user did not pass on any name
	 {
		messages.push("name is required")       //can hv an alert box also instead if needed
	}        
	if (password.value.length <= 0){
		messages.push('Password must be longer than 6 charachters')
	}
	if (password.value.length <= 20){
		messages.push('Password must be no longer than 20 charachters')
	}
	if (password.value == 'password'){
		messages.push("password cannot be password")
	}
	if(messages.length > 0){
		e.preventDefault()
		errorElement.innerText = messages.join(',')
	}
	
	e.preventDefault()  //prevent page from submitting 
})
