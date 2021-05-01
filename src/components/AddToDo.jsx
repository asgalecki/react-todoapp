import React, { useContext, useState } from "react";
import { ToDoContext } from "../contexts/ToDoContext";

const AddToDo = () => {
	const { dispatch } = useContext(ToDoContext);
	const [todo, setTodo] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch({ type: "ADD_TODO", todo });
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
				autoComplete='off'
				value={todo}
				onChange={(e) => setTodo(e.target.value)}
			/>
		</form>
	);
};

export default AddToDo;
