import "./App.css";
import ToDoContextProvider from "./contexts/ToDoContext";
import ToDoList from "./components/ToDoList";

function App() {
	return (
		<ToDoContextProvider>
			<div className='container'>
				<ToDoList />
			</div>
		</ToDoContextProvider>
	);
}

export default App;
