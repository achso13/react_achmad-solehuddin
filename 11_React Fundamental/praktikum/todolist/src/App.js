import TodoList from "./pages/TodoList/TodoList";
import { dataList } from "./dataList";

function App() {
  return <TodoList lists={dataList} />;
}

export default App;
