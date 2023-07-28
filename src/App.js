import LoginPage from  './components/LoginPage/index'
import SignUpPage from './components/SignupPage';
import RedirectPage from './components/RedirectPage';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from './components/MainPage';

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path ='/signup' element={<SignUpPage />} />
          {/*<Route path ='/oauth2/login/callback/kakao' element={<RedirectPage />} />*/}
            <Route path ='/oauth/kakao' element={<RedirectPage />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
