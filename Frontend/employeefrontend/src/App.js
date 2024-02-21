import './App.css';
import Navbar from './components/navbar';
import AddEmployees from './components/Addemployee';
import { BrowserRouter,Route, Routes } from 'react-router-dom';
import AllEmployees from './components/AllEmployees';
import UpdateEmployee from './components/UpdateEmployee';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element={<AllEmployees />}/>
          <Route path = "/" element={<AllEmployees />} />
          <Route path = "/addEmployee" element={<AddEmployees />} /> 
          <Route path = "/employees" element={<AllEmployees />} /> 
          <Route path = "/editEmployee/:id" element={<UpdateEmployee />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
