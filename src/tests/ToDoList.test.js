import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App";
import ToDoList from "../components/ToDoList";
import ToDoContextProvider from "../contexts/ToDoContext";

describe("ToDoList - render elements", () => {
	it("render initial elements from ToDoContext", () => {
		render(<ToDoList />, { wrapper: ToDoContextProvider });

		const todos = screen.queryAllByRole("listitem");
		expect(todos).toHaveLength(0);

		const noTodos = screen.getByText(/it seems/i);
		expect(noTodos).toBeInTheDocument();
	});

	it("render todos after adding and removing todo ", () => {
		render(<App />);

		const form = screen.getByTestId("addForm");
		const addToDo = screen.getByLabelText(/add/i);

		// add first todo
		userEvent.clear(addToDo);
		userEvent.type(addToDo, "drink coffe");
		fireEvent.submit(form);

		// add second todo
		userEvent.clear(addToDo);
		userEvent.type(addToDo, "play chess");
		fireEvent.submit(form);

		let todos = screen.getAllByRole("listitem");
		expect(todos).toHaveLength(2);

		const deleteButton = screen.getByTestId("test play chess");
		expect(deleteButton).toBeInTheDocument();

		// delete one todo
		userEvent.click(deleteButton.firstChild);
		todos = screen.getAllByRole("listitem");
		expect(todos).toHaveLength(1);
	});
});
