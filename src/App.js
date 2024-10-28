import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Footer from './components/Footer/Footer';
// import HomePage from './Pages/HomePage/HomePage';
import SearchPage from './Pages/SearchPage/SearchPage';
import ExplorePage from './Pages/ExplorePage/ExplorePage';
import MessagesPage from './Pages/MessagesPage/MessagesPage';
import NotificationsPage from './Pages/NotificationsPage/NotificationsPage';
import CreatePage from './Pages/CreatePage/CreatePage';
import Reset from './components/LogIn/Reset';
import SignUp from './components/LogIn/SignUp';
import LogIn from './components/LogIn/LogIn';
import LoginPage from './Pages/Home/Home';
import Home from './Pages/Home/Home';


function App() {
    return (
        <Router>
            <div>
                {/* Другие компоненты */}
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/search" element={<SearchPage />} />
                    <Route path="/logsign" element={<LoginPage />} />
                    <Route path="/explore" element={<ExplorePage />} />
                    <Route path="/messages" element={<MessagesPage />} />
                    <Route path="/notifications" element={<NotificationsPage />} />
                    <Route path="/create" element={<CreatePage />} />
                    <Route path="/reset" element={<Reset />} />
                    <Route path="/login" element={<LogIn />} />
                    <Route path="/signup" element={<SignUp />} />
                </Routes>
                {/* <Footer />  */}
            </div>
        </Router>
    );
}

export default App;
