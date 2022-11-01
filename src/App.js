
import './App.css';
import {openModal, openModalAccount} from './component/openModal';


function App() {

  function handledOpenModal(){
    openModal();
  }

   function handledOpenModal2(){
    openModalAccount();
  }

  return (
    <div className="App">
      <button onClick={handledOpenModal}>Abrir modal</button>
      <button onClick={handledOpenModal2}>Abrir modal</button>
    </div>
  );
}

export default App;
