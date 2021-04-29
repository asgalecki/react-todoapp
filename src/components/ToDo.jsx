import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { ToDoContext } from "../contexts/ToDoContext";

const ToDo = ({ todo }) => {
	const { dispatch } = useContext(ToDoContext);
	return (
		<li className='list-group-item d-flex justify-content-between align-items-center todos__todo'>
			{todo.task}
			<span data-testid={`test ${todo.task}`}>
				<FontAwesomeIcon
					icon={faTrashAlt}
					data-testid={todo.task}
					className='delete'
					onClick={() => dispatch({ type: "REMOVE_TODO", id: todo.id })}
				/>
			</span>
		</li>
	);
};

export default ToDo;
