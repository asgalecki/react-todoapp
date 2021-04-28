import { render, screen } from "@testing-library/react";
import ToDoList from "../components/ToDoList";
import ToDoContextProvider from "../contexts/ToDoContext";

describe("ToDoList - render elements", () => {
	it("render initial elements from ToDoContext", () => {
		render(<ToDoList />, { wrapper: ToDoContextProvider });

		const todos = screen.getAllByRole("listitem");
		expect(todos).toHaveLength(2);
	});
});
