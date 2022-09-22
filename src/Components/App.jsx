import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import PublicRoute from './PublicRoute/PublicRoute';
import Home from './Pages/Home';
import {SharedLayout} from './Menu/SharedLayout/SharedLayout';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { current } from 'Redux/Auth/Auth-operations';


const Register = lazy(()=>import('./Pages/RegisterPage'));
const Contacts = lazy(()=>import('./Pages/Contacts'));
const Login = lazy(()=>import('./Pages/LoginPage'));





export const App = () => {
const dispatch = useDispatch();

useEffect(()=>{
  dispatch(current())
},[dispatch]);


  return (
    <Suspense fallback={<p>....Loading.....</p>}>
<Routes>

  <Route path='/' element={<SharedLayout />}>
    <Route index element={<Home />} />
    <Route element={<PrivateRoute />}>
    <Route path='contacts' element={<Contacts/>} />
    </Route>
   <Route element={<PublicRoute />}>
<Route path='register' element={<Register />} />
<Route path='login' element={<Login />} />
</Route>

<Route path='*' element={<Home />} />
</Route>
</Routes>
</Suspense>
  )
}
