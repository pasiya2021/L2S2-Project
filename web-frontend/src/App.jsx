import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Login from './pages/Login';
import CreateAccount from './pages/CreateAccount';
import Dashboard from './pages/Dashboard';
import Settings from './pages/Settings';
import Layout from './components/shared/Layout';
import AdminContextProvider from './Context/AdminContext';
import Customers from './pages/Customers';
import Categories from './pages/Categories';
import Orders from './pages/Orders';
import Warehouses from './pages/Warehouses';
import WarehousesID from './pages/WarehousesID';

function App() {

  return (
    <AdminContextProvider>
      <BrowserRouter>
        <div className="App text-black bg-white">
          <header className="App-header" >
            <Routes>
              <Route path="/Login" element={<Login />}></Route>
              <Route path="/CreateAccount" element={<CreateAccount />}></Route>
              <Route path="/" element={<Layout name="Dashbord" />}>
                <Route index element={<Dashboard />}></Route>
                <Route path="/Settings" element={<Settings />}></Route>
                <Route path="/Customers" element={<Customers />}></Route>
                <Route path="/Categories" element={<Categories />}></Route>
                <Route path="/Orders" element={<Orders />}></Route>
                <Route path="/Warehouses" element={<Warehouses />}></Route>
                <Route path="/warehouses/:id" element={<WarehousesID />} />
              </Route>
            </Routes>
          </header>
        </div>
      </BrowserRouter>
    </AdminContextProvider>
  );
}

export default App
