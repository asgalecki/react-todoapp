import React, { useContext } from "react";
import { ToDoContext } from "../contexts/ToDoContext";
import ToDo from "./ToDo";

const ToDoList = () => {
	const { todos } = useContext(ToDoContext);

	return todos.length ? (
		<ul className='list-group mx-auto text-light todos'>
			{todos.map((todo) => {
				return <ToDo todo={todo.task} key={todo.id} />;
			})}
		</ul>
	) : (
		<div className='empty'>It seems that you have nothing todo.</div>
	);
};

export default ToDoList;
