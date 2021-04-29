import React, { useContext, createContext, useState } from "react";
import { v1 as uuid } from "uuid";

export const ToDoContext = createContext();

const ToDoContextProvider = (props) => {
	const [todos, setTodos] = useState([]);
	const addToDo = (todo) => {
		setTodos([...todos, { task: todo, id: uuid() }]);
	};

	return (
		<ToDoContext.Provider value={{ todos, addToDo }}>
			{props.children}
		</ToDoContext.Provider>
	);
};

export default ToDoContextProvider;
