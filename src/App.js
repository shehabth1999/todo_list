import './App.css';
import Header from './components/Headerr/Headerr';
import TodoApp from './components/TodoApp/TodoApp';
import TodoItem from './components/TodoApp/TodoItem';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header/>
        <TodoApp/>
      </header>
    </div>
  );
}

export default App;
