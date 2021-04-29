import React, { useContext } from "react";
import { ToDoContext } from "../contexts/ToDoContext";

const Navbar = () => {
	const { todos } = useContext(ToDoContext);
	return (
		<header className='text-center text-light my-4 mx-auto'>
			<h1 className='mb-4 text-center'>Todo List</h1>
			<p>Currently you have {todos.length} things to do...</p>
		</header>
	);
};

export default Navbar;
