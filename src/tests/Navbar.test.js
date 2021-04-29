import { render, screen } from "@testing-library/react";
import Navbar from "../components/Navbar";
import ToDoContextProvider from "../contexts/ToDoContext";

describe("Navbar test", () => {
	test("navbar displays initial number of todos correctly", () => {
		render(<Navbar />, { wrapper: ToDoContextProvider });

		const para = screen.getByText(/currently/i);
		expect(para).toHaveTextContent("2");
	});
});
