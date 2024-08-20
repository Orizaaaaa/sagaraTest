
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import DashboardAdmin from './pages/admin/dashboard';
import Students from './pages/admin/students';



function App() {

  return (


    <Routes>
      <Route path="/" element={<Home />} />
      {/* Protected Routes for Admins */}
      <Route >
        <Route path="/dashboard" element={<DashboardAdmin />} />
        <Route path="/students" element={<Students />} />
      </Route>
    </Routes>



  )
}

export default App
