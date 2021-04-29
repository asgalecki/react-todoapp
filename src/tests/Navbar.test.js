import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App";
import Navbar from "../components/Navbar";
import ToDoContextProvider from "../contexts/ToDoContext";

describe("Navbar test", () => {
	test("navbar displays initial number of todos correctly", () => {
		render(<Navbar />, { wrapper: ToDoContextProvider });

		const para = screen.getByText(/currently/i);
		expect(para).toHaveTextContent("0");
	});

	test("navbar displays correct number of todos after adding todos", () => {
		render(<App />);

		const form = screen.getByTestId("addForm");
		const addToDo = screen.getByLabelText(/add/i);

		userEvent.clear(addToDo);
		userEvent.type(addToDo, "drink coffe");
		fireEvent.submit(form);

		let para = screen.getByText("currently you have 1 thing to do...", {
			exact: false,
		});
		expect(para).toBeInTheDocument();

		userEvent.clear(addToDo);
		userEvent.type(addToDo, "play chess");
		fireEvent.submit(form);

		para = screen.getByText(/currently/i);
		expect(para).toHaveTextContent("2");
	});
});
