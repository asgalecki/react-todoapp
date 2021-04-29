import "./App.css";
import ToDoContextProvider from "./contexts/ToDoContext";
import ToDoList from "./components/ToDoList";
import Navbar from "./components/Navbar";
import AddToDo from "./components/AddToDo";

function App() {
	return (
		<ToDoContextProvider>
			<div className='container'>
				<Navbar />
				<ToDoList />
				<AddToDo />
			</div>
		</ToDoContextProvider>
	);
}

export default App;
