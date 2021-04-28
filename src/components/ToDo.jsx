import React from "react";

const ToDo = ({ todo }) => {
	return (
		<li className='list-group-item d-flex justify-content-between align-items-center todos__todo'>
			{todo}
		</li>
	);
};

export default ToDo;
