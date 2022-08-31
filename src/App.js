import './App.css';
import Displayer from './components/Displayer';
import IncrementerDecrementer from './components/IncrementerDecrementer';

function App() {
  return (
    <div className="App">
      <div className="drop-shadow-md flex items-center justify-center  absolute top-0 left-0 right-0 bottom-0 bg-slate-200 w-screen h-screen">
        <div className="flex items-center bg-white p-4 rounded-md flex-col">
          <Displayer />
          <IncrementerDecrementer />
        </div>
      </div>
    </div>
  );
}

export default App;
