import React, { createContext, useReducer } from "react";
import { ToDoReducer } from "../reducers/ToDoReducer";

export const ToDoContext = createContext();

const ToDoContextProvider = (props) => {
	const [todos, dispatch] = useReducer(ToDoReducer, []);

	return (
		<ToDoContext.Provider value={{ todos, dispatch }}>
			{props.children}
		</ToDoContext.Provider>
	);
};

export default ToDoContextProvider;
