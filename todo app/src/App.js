import './App.css';
import TodoApp from './Components/TodoApp';
import { Provider } from 'react-redux'
import { data } from './Redux/data';

function App() {
  return (
    <Provider store={data}>
      <div className="App">
        <TodoApp/>
      </div>
    </Provider>
  );
}

export default App;
