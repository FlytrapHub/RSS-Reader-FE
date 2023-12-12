import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "./App.css";
import LoginPage from './page/auth/LoginPage';
import GitHubCallbackPage from './page/auth/GitHubCallbackPage';
import { PATH } from './constants/Path';
import AllPostListPage from './page/post/AllPostListPage';
import AdminLoginCallbackPage from './page/auth/AdminLoginCallbackPage';
import BookmarkListPage from './page/post/BookmarkListPage';
import SubscribePostListPage from './page/post/SubscribePostListPage';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={PATH.MAIN} element={<AllPostListPage />} />
          <Route path={PATH.BOOKMARK} element={<BookmarkListPage />} />
          <Route path={PATH.SUBSCRIBE} element={<SubscribePostListPage />} />
          <Route path={PATH.AUTH.LOGIN} element={<LoginPage />} />
          <Route path={PATH.AUTH.CALLBACK} element={<GitHubCallbackPage />} />
          <Route path={PATH.AUTH.ADMIN_CALLBACK} element={<AdminLoginCallbackPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
