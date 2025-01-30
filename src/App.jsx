
import { useDispatch} from 'react-redux'
import './App.css'
import { lazy} from 'react'
import { Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout/Layout';
import PublicRoute from './components/PublicRoute/PublicRoute';
import RestrictedRoute from './components/RestrictedRoute/RestrictedRoute';


const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage/NotFoundPage'));
const ContactsPage = lazy(() => import('./pages/ContactsPage/ContactsPage'));
const LoginPage = lazy(() => import('./pages/LoginPage/LoginPage'));
const RegistrationPage = lazy(() => import('./pages/RegistrationPage/RegistrationPage'));




function App() {
  const dispatch = useDispatch();

 
  return (
    <Routes >
      <Route path='/' element={ <Layout /> }>
        <Route index element={<HomePage />}></Route>
        <Route path='contacts' element={ <RestrictedRoute><ContactsPage/></RestrictedRoute>} />
          
        
        <Route path='/register' element={<PublicRoute><RegistrationPage /></PublicRoute>}/>
        <Route path='/login' element={<PublicRoute><LoginPage /></PublicRoute>} />
        </Route>
        <Route path='*' element={<NotFoundPage/>} />
    </Routes>
  )
}

export default App
