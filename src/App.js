import "./App.scss";
import { TodoProvider } from "./components/TodoContext/TodoContext";
import { AppUI } from "./components/AppUI/AppUI";

function App() {
  return (
    <TodoProvider>
      <AppUI></AppUI>
    </TodoProvider>
  );
}

export { App };
