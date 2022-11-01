import logo from './logo.svg';
import './App.css';
import openModal from './component/openModal';

function App() {

  function handledOpenModal(){
    openModal();
  }

  return (
    <div className="App">
      <button onClick={handledOpenModal}>Abrir modal</button>
    </div>
  );
}

export default App;
