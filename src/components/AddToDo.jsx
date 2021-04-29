import React, { useContext, useState } from "react";
import { ToDoContext } from "../contexts/ToDoContext";

const AddToDo = () => {
	const { addToDo } = useContext(ToDoContext);
	const [todo, setTodo] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		addToDo(todo);
		setTodo("");
	};

	return (
		<form
			onSubmit={handleSubmit}
			className='text-center my-4'
			data-testid='addForm'
		>
			<label htmlFor='add' className='text-light'>
				Add
			</label>
			<input
				type='text'
				name='add'
				id='add'
				className='form-control m-auto'
				value={todo}
				onChange={(e) => setTodo(e.target.value)}
			/>
		</form>
	);
};

export default AddToDo;
