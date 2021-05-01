import "./App.css";
import ToDoContextProvider from "./contexts/ToDoContext";
import SearchContextProvider from "./contexts/SearchContext";
import ToDoList from "./components/ToDoList";
import Navbar from "./components/Navbar";
import AddToDo from "./components/AddToDo";

function App() {
	return (
		<ToDoContextProvider>
			<SearchContextProvider>
				<div className='container'>
					<Navbar />
					<ToDoList />
					<AddToDo />
				</div>
			</SearchContextProvider>
		</ToDoContextProvider>
	);
}

export default App;
