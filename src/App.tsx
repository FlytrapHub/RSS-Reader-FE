import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "./App.css";
import LoginPage from './page/auth/LoginPage';
import GitHubCallbackPage from './page/auth/GitHubCallbackPage';
import MainPage from './page/MainPage';
import { PATH } from './constants/Path';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={PATH.MAIN} element={<MainPage />} />
          <Route path={PATH.AUTH.LOGIN} element={<LoginPage />} />
          <Route path={PATH.AUTH.CALLBACK} element={<GitHubCallbackPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
