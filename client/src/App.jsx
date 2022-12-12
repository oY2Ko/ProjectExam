import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LogIn from './pages/LogIn';
import Header from './Header/Header';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/LogIn' element={<LogIn/>}/>
      </Routes>

    </div>


  );
}

export default App;
