import { Route, Routes } from 'react-router-dom';
import './App.css';
import Index from './components/Homepage/Index';
import Signup from './components/pages/Signup';
import Navbar from './components/common components/Navbar';
import Login from './components/pages/Login';
import VerifyEmail from './components/pages/VerifyEmail';
import ResetPassword from './components/pages/ResetPassword';
import Dashboard from './components/pages/Dashboard';
import MyProfile from './components/Dashboard/MyProfile';

function App() {
  return (
    <div>

      <Navbar/>
      <Routes>

        <Route path='/' element={<Index/>}/>

        <Route path='signup' element={<Signup/>}/>

        <Route path='login' element={<Login/>}/>

        <Route path='verify-email' element={<VerifyEmail/>}/>

        <Route path="reset-password" element={<ResetPassword/>}/>

        <Route element={<Dashboard/>}>

          <Route path='/dashboard/my-profile' element={<MyProfile/>}/>
        </Route>

      </Routes>

    </div>
  );
}

export default App;
