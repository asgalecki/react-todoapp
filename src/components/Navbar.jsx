import React, { useContext } from "react";
import { ToDoContext } from "../contexts/ToDoContext";

const Navbar = () => {
	const { todos } = useContext(ToDoContext);
	return (
		<header className='navbar text-center text-light my-4'>
			<h1 className='mb-4'>Todo List</h1>
			<p>Currently you have {todos.length} things to do...</p>
		</header>
	);
};

export default Navbar;
