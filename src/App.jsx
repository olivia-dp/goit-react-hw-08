
import { useDispatch, useSelector} from 'react-redux'
import './App.css'
import { lazy, startTransition, Suspense, useEffect} from 'react'
import { Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout/Layout';
import PublicRoute from './components/PublicRoute/PublicRoute';
import RestrictedRoute from './components/RestrictedRoute/RestrictedRoute';
import { refreshUser } from './redux/auth/operations';
import { selectIsRefreshing } from './redux/auth/selectors';
import { themeChange } from 'theme-change';


const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage/NotFoundPage'));
const ContactsPage = lazy(() => import('./pages/ContactsPage/ContactsPage'));
const LoginPage = lazy(() => import('./pages/LoginPage/LoginPage'));
const RegistrationPage = lazy(() => import('./pages/RegistrationPage/RegistrationPage'));




function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);
useEffect(() => {
    dispatch(refreshUser());
}, [dispatch]);
 
  
  return isRefreshing ? null : (
    <Suspense fallback={<p>Loading page...</p>}>
    <Routes >
      <Route path='/' element={ <Layout /> }>
        <Route index element={<HomePage />}></Route>
        <Route path='contacts' element={ <RestrictedRoute><ContactsPage/></RestrictedRoute>} />
          
        
        <Route path='/register' element={<PublicRoute><RegistrationPage /></PublicRoute>}/>
        <Route path='/login' element={<PublicRoute><LoginPage /></PublicRoute>} />
        </Route>
        <Route path='*' element={<NotFoundPage/>} />
    </Routes>
    </Suspense>
  )
}

export default App
