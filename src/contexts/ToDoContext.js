import React, { useContext, createContext, useState } from "react";
import { v1 as uuid } from "uuid";

export const ToDoContext = createContext();

const ToDoContextProvider = (props) => {
	const [todos, setTodos] = useState([]);
	const addToDo = (todo) => {
		setTodos([...todos, { task: todo, id: uuid() }]);
	};
	const removeToDo = (id) => {
		setTodos(todos.filter((todo) => todo.id !== id));
	};

	return (
		<ToDoContext.Provider value={{ todos, addToDo, removeToDo }}>
			{props.children}
		</ToDoContext.Provider>
	);
};

export default ToDoContextProvider;
