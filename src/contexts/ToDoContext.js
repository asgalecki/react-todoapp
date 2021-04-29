import React, { useContext, createContext, useState } from "react";

export const ToDoContext = createContext();

const ToDoContextProvider = (props) => {
	const [todos, setTodos] = useState([
		{ task: "buy some milk", id: 1 },
		{ task: "play fifa", id: 2 },
	]);
	const addToDo = (todo) => {
		setTodos([...todos, { task: todo, id: 3 }]);
	};

	return (
		<ToDoContext.Provider value={{ todos, addToDo }}>
			{props.children}
		</ToDoContext.Provider>
	);
};

export default ToDoContextProvider;
