
import './App.css';
import Layout from './components/layout/layout';
import Home from './components/Home/Home'
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Properties from './AddProperties/Properties';
import ReviewPage from './components/reviews/Reviews';
import Login from './components/signInAndSignUp/Login';
import Signup from './components/signInAndSignUp/Signup';
import Contactus from './components/ContactUs/contactus';
import Forget from './components/signInAndSignUp/forget';
function App() {


  const route = createBrowserRouter([{
    path:"",element:<><Layout/></>,
    children:[{path:'/',element:<Home/>},
    {path:'/reviews',element:<ReviewPage/>}
    ,{path:'/properties',element:<Properties/>}
    ,{path:'/login',element:<Login/>}
    ,{path:'/signup',element:<Signup/>}
    ,{path:'/contactus',element:<Contactus/>}
    ,{path:'/forget',element:<Forget/>}

  ]
  }
  
])
  return (
<>

<RouterProvider router={route}/>
</>
  
  );
}

export default App;
