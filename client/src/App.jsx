import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LogIn from './pages/LogIn';
import Header from './Header/Header';
import Tests from './pages/Tests'

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/LogIn' element={<LogIn/>}/>
        <Route path='/Register' element={<LogIn/>}/>
        <Route path='/Tests' element={<Tests/>}/>
      </Routes>

    </div>


  );
}

export default App;
