import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App";
import ToDoList from "../components/ToDoList";
import ToDoContextProvider from "../contexts/ToDoContext";

describe("ToDoList - render elements", () => {
	it("render initial elements from ToDoContext", () => {
		render(<ToDoList />, { wrapper: ToDoContextProvider });

		const todos = screen.getAllByRole("listitem");

		expect(todos).toHaveLength(2);
	});

	it("render new todos after adding todo", () => {
		render(<App />);

		const form = screen.getByTestId("addForm");
		const addToDo = screen.getByLabelText(/add/i);

		userEvent.clear(addToDo);
		userEvent.type(addToDo, "drink coffe");
		fireEvent.submit(form);
		const todos = screen.getAllByRole("listitem");

		expect(todos).toHaveLength(3);
	});
});
