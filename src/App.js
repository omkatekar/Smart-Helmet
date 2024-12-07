import logo from './logo.svg';
import './App.css';
import {Route,createBrowserRouter,RouterProvider,createRoutesFromElements} from 'react-router-dom';
import MainPage from './pages/MainPage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
// import About from './components/About/About';
import Main from './components/Main/Main';
import MainLayout from './components/Layouts/MainLayout';

function App() {
  

  const router=createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout />} >
        <Route index element={<LoginPage />} />
        <Route path='/signup' element={<SignUpPage />} />
        <Route path='/main' element={<MainPage />} />
      </Route>
    )
  )
 


  
  
  return (
    <>
     <RouterProvider router={router} /> 
     {/* <Login /> 
    <SignUpPage /> */}
    </>
    );
}

export default App;
