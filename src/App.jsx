
import { useDispatch} from 'react-redux'
import './App.css'
import { lazy, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom';
// import { RestrictedRoute } from './RestrictedRoute';
// import { PrivateRoute } from './PrivateRoute';
import { Layout } from './components/Layout/Layout';
import ContactsPage from './pages/ContactsPage/ContactsPage';


const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
// const NotFoundPage = lazy(() => import('./pages/NotFoundPage/NotFoundPage'));
// const ContactsPage = lazy(() => import('./pages/ContactsPage/ContactsPage'));
const LoginPage = lazy(() => import('./pages/LoginPage/LoginPage'));
const RegistrationPage = lazy(() => import('./pages/RegistrationPage/RegistrationPage'));




function App() {
  const dispatch = useDispatch();

 
  return (
    <Routes >
      <Route path='/' element={<Layout />}>
        <Route index element={<HomePage />}></Route>
        
        <Route path='contacts' element={<ContactsPage />} />

        {/* <Route path='/register' element={<RestrictedRoute redirectTo="/contacts" component={<RegistrationPage />} />}/>
        <Route path='/login' element={<RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />}/>
        <Route path="/contacts" element={<PrivateRoute redirectTo="/login" component={<ContactsPage />} />}/> */}
        </Route>
        <Route path='/register' element={<RegistrationPage />}/>
        <Route path='/login' element={<LoginPage />} />
    </Routes>
  )
}

export default App
