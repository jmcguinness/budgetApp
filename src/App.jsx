import RootLayout from './layouts/RootLayout';
import Home from './components/home';
import Login from './components/login'
import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from "react-router-dom";
import './App.css';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route path='login' element={<Login />} />
      <Route path='home' element={<Home />} />
    </Route>
    
  )
)

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
