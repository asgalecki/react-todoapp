import React, { createContext, useReducer, useEffect } from "react";
import { ToDoReducer } from "../reducers/ToDoReducer";

export const ToDoContext = createContext();

const ToDoContextProvider = (props) => {
	const [todos, dispatch] = useReducer(ToDoReducer, [], () => {
		const localData = localStorage.getItem("todos");
		return localData ? JSON.parse(localData) : [];
	});

	useEffect(() => {
		localStorage.setItem("todos", JSON.stringify(todos));
	}, [todos]);

	return (
		<ToDoContext.Provider value={{ todos, dispatch }}>
			{props.children}
		</ToDoContext.Provider>
	);
};

export default ToDoContextProvider;
