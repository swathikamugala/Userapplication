
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import{BrowserRouter as Router,Routes,Route}from 'react-router-dom';
import Home from './components/Pages/Home';
import About from './components/Pages/About';
import Contact from './components/Pages/Contact';
import Navbar from './components/Layouts/Navbar';
import User from './components/Users/User';
import AddUser from './components/Users/AddUser';
import EditUser from './components/Users/EditUser';
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
        <Route path="/home" element={<Home/>}>Home</Route>
        <Route path="/about" element={<About/>}>About</Route>
        <Route path="/contact" element={<Contact/>}>Contact</Route>
        <Route path="/Users/:id" element={<User/>}>User</Route>
        <Route path="/Users/add" element={<AddUser/>}>AddUser</Route>
        <Route path="/Users/edit/:id" element={<EditUser/>}>EditUser</Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
