import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Route, Routes,Navigate } from 'react-router-dom';
import { Admin } from './pages/Admin';
import { User } from './pages/User';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Admin/>}></Route>
      <Route path='/user' element={<User/>}></Route>
      <Route path='*' element={<Navigate to="/user"/>}></Route>
    </Routes>
    </>
  );
}

export default App;
