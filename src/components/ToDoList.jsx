import React, { useContext } from "react";
import { ToDoContext } from "../contexts/ToDoContext";
import { SearchContext } from "../contexts/SearchContext";
import ToDo from "./ToDo";

const ToDoList = () => {
	const { todos } = useContext(ToDoContext);
	const { search } = useContext(SearchContext);

	console.log(search);

	return todos.length ? (
		<ul className='list-group mx-auto text-light todos'>
			{todos
				.filter((todo) => todo.task.toLowerCase().includes(search))
				.map((todo) => {
					return <ToDo todo={todo} key={todo.id} />;
				})}
		</ul>
	) : (
		<div className='empty text-center text-light'>
			It seems that you have nothing todo.
		</div>
	);
};

export default ToDoList;
