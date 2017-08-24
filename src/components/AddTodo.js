import React from 'react'

const AddTodo = ({ addTodo }) => (

	<form onSubmit={(event) => {
		
		event.preventDefault()

		const userInput = event.target.userInput.value

		addTodo(userInput)

		event.target.userInput.value = ''
	}}>
		
		<input type="text" name="userInput"/>
		<button>Add</button>

	</form>

)

export default AddTodo