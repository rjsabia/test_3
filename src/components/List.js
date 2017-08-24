import React from 'react'

const List = ({todos, deleteTodo}) => (

	<ul>
		{todos.map((todo, index) => (

			<li key={index}>

				{todo.id} --- {todo.text}

				<button onClick={() => deleteTodo(todo.id)}>Delete</button>

			</li>
		))}
		

	</ul>
	
)

export default List