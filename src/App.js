
import './App.css';
import Example from'./components/Example';
import { Root } from'./components/Swing';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Hello World!</p>
        <Example name="Cynthia Chavez"/>
        <Root/>
       
      </header>
    </div>
  );
}

export default App;
