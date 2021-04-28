import React, { createContext, useState } from "react";

export const ToDoContext = createContext();

const ToDoContextProvider = (props) => {
	const [todos, setTodos] = useState([
		{ task: "buy some milk", id: 1 },
		{ task: "play fifa", id: 2 },
	]);

	return (
		<ToDoContext.Provider value={{ todos }}>
			{props.children}
		</ToDoContext.Provider>
	);
};

export default ToDoContextProvider;
