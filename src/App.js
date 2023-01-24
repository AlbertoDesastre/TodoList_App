import "./App.scss";
import { TodoProvider } from "./components/TodoContext/TodoContext";
import TodoList from "./components/TodoList/TodoList";

function App() {
  return (
    <div className="App">
      <TodoProvider>
        <h1>Yeah, I'm working</h1>
        <TodoList></TodoList>
      </TodoProvider>
    </div>
  );
}

export default App;
