import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from './components/layout/MainLayout.jsx';
import Home from './components/layout/Home.jsx';
import Error from './components/Pages/Error.jsx';
import AddCoffe from './components/Pages/AddCoffe.jsx';
import UpdateCoffee from './components/Pages/UpdateCoffee.jsx';
import Vew from './components/Pages/Vew.jsx';
import SignUp from './components/layout/SignUp.jsx';
import SignIn from './components/layout/SignIn.jsx';
import AuthProvider from './provider/AuthProvider.jsx';
import AllUsers from './components/Pages/AllUsers.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Home />,
        loader: () => fetch('http://localhost:5000/coffee')
      },
      {
        path: '/addcoffe',
        element: <AddCoffe />
      },
      {
        path: '/updateCoffee/:id',
        element: <UpdateCoffee />,
        loader: ({ params }) => fetch(`http://localhost:5000/coffee/${params.id}`)
      },
      {
        path: '/vewCoffee/:id',
        element: <Vew />,
        loader: ({ params }) => fetch(`http://localhost:5000/coffee/${params.id}`)
      },
      {
        path: '/signUp',
        element: <SignUp />
      },
      {
        path: '/signIn',
        element: <SignIn />
      },
      {
        path: '/users',
        element: <AllUsers />,
        loader: () => fetch('http://localhost:5000/users')
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
