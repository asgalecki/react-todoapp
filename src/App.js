import "./App.css";
import ToDoContextProvider from "./contexts/ToDoContext";
import ToDoList from "./components/ToDoList";
import Navbar from "./components/Navbar";

function App() {
	return (
		<ToDoContextProvider>
			<div className='container'>
				<Navbar />
				<ToDoList />
			</div>
		</ToDoContextProvider>
	);
}

export default App;
