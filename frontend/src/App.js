
import './App.css';
import Layout from './components/layout/layout';
import Home from './components/Home/Home'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Properties from './AddProperties/Properties';
import ReviewPage from './components/reviews/Reviews';
import Login from './components/signInAndSignUp/Login';
import Signup from './components/signInAndSignUp/Signup';
import Contactus from './components/ContactUs/contactus';
import Forget from './components/signInAndSignUp/forget';
// import Property from './components/propertyView/Property';
import PropertyDetails from './components/propertyView/Property';
import Profile from './components/profile/profile';
import Filter from './components/filter/filter'
function App() {


  const route = createBrowserRouter([{
    path: "", element: <><Layout /></>,
    children: [{ path: '/', element: <Home /> },
    { path: '/reviews', element: <ReviewPage /> }
      , { path: '/properties', element: <Properties /> }
      , { path: '/login', element: <Login /> }
      , { path: '/signup', element: <Signup /> }
      , { path: '/contactus', element: <Contactus /> }
      , { path: '/forget', element: <Forget /> },
    { path: '/viewproperty', element: <PropertyDetails /> },
    { path: "/profile", element: <Profile /> },
    {path:"/filter",element :<Filter />}


    ]
  }

  ])
  return (
    <>

      <RouterProvider router={route} />
    </>

  );
}

export default App;
