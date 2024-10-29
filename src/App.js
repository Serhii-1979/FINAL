import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import MainLayout from "./Layout/MainLayout";
import SearchPage from "./Pages/SearchPage/SearchPage";
import ExplorePage from "./Pages/ExplorePage/ExplorePage";
import MessagesPage from "./Pages/MessagesPage/MessagesPage";
import NotificationsPage from "./Pages/NotificationsPage/NotificationsPage";
import CreatePage from "./Pages/CreatePage/CreatePage";
import Reset from "./components/LogIn/Reset";
import SignUp from "./components/LogIn/SignUp";
import LogIn from "./components/LogIn/LogIn";
import AuthContainer from "./components/LogIn/AuthContainer";
import HomePage from './Pages/HomePage/HomePage';
import Profile from './Pages/Profile/Profile'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AuthContainer />}>
          <Route index element={<LogIn />} />
          <Route path="reset" element={<Reset />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="login" element={<LogIn />} />
        </Route>

        <Route element={<MainLayout />}>
          <Route path="/home" element={<HomePage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/explore" element={<ExplorePage />} />
          <Route path="/messages" element={<MessagesPage />} />
          <Route path="/notifications" element={<NotificationsPage />} />
          <Route path="/create" element={<CreatePage />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
