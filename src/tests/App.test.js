import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App";

test("Happy path", () => {
	render(<App />);

	// initial information
	let para = screen.getByText(/currently/i);
	let noTodos = screen.queryByText(/it seems/i);
	let todos = screen.queryAllByRole("listitem");

	expect(para).toHaveTextContent(0);
	expect(noTodos).toBeInTheDocument();
	expect(todos).toHaveLength(0);

	// add two todos
	const form = screen.getByTestId("addForm");
	const addToDo = screen.getByLabelText(/add/i);
	let exampleTodos = ["drink coffe", "play chess"];

	exampleTodos.forEach((todo) => {
		userEvent.clear(addToDo);
		userEvent.type(addToDo, todo);
		fireEvent.submit(form);
	});

	para = screen.getByText(/currently/i);
	noTodos = screen.queryByText(/it seems/i);
	todos = screen.queryAllByRole("listitem");

	expect(para).toHaveTextContent(2);
	expect(noTodos).not.toBeInTheDocument();
	expect(todos).toHaveLength(2);

	// remove one todo
	let deleteButton = screen.getByTestId("test play chess");
	expect(deleteButton).toBeInTheDocument();

	userEvent.click(deleteButton.firstChild);
	para = screen.getByText(/currently/i);
	noTodos = screen.queryByText(/it seems/i);
	todos = screen.queryAllByRole("listitem");

	expect(para).toHaveTextContent(1);
	expect(noTodos).not.toBeInTheDocument();
	expect(todos).toHaveLength(1);

	// remove one todo
	deleteButton = screen.getByTestId("test drink coffe");
	expect(deleteButton).toBeInTheDocument();

	userEvent.click(deleteButton.firstChild);
	para = screen.getByText(/currently/i);
	noTodos = screen.queryByText(/it seems/i);
	todos = screen.queryAllByRole("listitem");

	expect(para).toHaveTextContent(0);
	expect(noTodos).toBeInTheDocument();
	expect(todos).toHaveLength(0);
});
