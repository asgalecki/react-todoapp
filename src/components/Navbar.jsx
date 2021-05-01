import React, { useContext, useState } from "react";
import { ToDoContext } from "../contexts/ToDoContext";
import { SearchContext } from "../contexts/SearchContext";

const Navbar = () => {
	const { todos } = useContext(ToDoContext);
	const { addSearch } = useContext(SearchContext);

	const things = todos.length === 1 ? "thing" : "things";

	return (
		<header className='text-center text-light my-4 mx-auto'>
			<h1 className='mb-4 text-center'>Todo List</h1>
			<form className='search my-4' onSubmit={(e) => e.preventDefault()}>
				<input
					type='text'
					name='search'
					className='form-control m-auto'
					placeholder='search todos'
					autoComplete='off'
					onKeyUp={(e) => addSearch(e.target.value)}
				/>
			</form>
			<p>
				Currently you have {todos.length} {things} to do...
			</p>
		</header>
	);
};

export default Navbar;
