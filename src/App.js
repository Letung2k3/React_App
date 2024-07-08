import logo from './logo.svg';
import './Assets/css/App.scss';
import Nav from "./Views/Nav/Nav";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Routes, Route } from 'react-router-dom';
import MyComponent from './Views/About/MyComponent';
import Home from './Views/Home/Home';
function App() {
  return (
    <div className="App">
      <Nav />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" width={50} height={50} />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/About' element={<MyComponent />} />
        </Routes>
        <ToastContainer />
      </header>
    </div>
  );
}

export default App;
