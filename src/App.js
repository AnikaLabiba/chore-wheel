import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddProject from './Pages/AddProject/AddProject';
import EditProject from './Pages/EditProject/EditProject';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Register from './Pages/Login/Register';
import RequireAuth from './Pages/Login/RequireAuth';
import ProjectsDetails from './Pages/ProjectDetails/ProjectsDetails';
import Projects from './Pages/Projects/Projects';
import Footer from './Pages/Shared/Footer/Footer';
import Navbar from './Pages/Shared/Navbar/Navbar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Profile from './Pages/Profile/Profile';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route>

        <Route path='/projects' element={<RequireAuth>
          <Projects />
        </RequireAuth>}></Route>
        <Route path='/addProject' element={<AddProject />}></Route>
        <Route path='/profile' element={<Profile />}></Route>
        <Route path='/project/:id' element={<ProjectsDetails />}></Route>
        <Route path='/editProject/:id' element={<EditProject />}></Route>
      </Routes>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
