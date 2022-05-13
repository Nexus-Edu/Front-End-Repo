import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from "./components/home/HomeContainer"
import LoginSignUpPage from "./components/loginSignUp/LoginSignUpPage"
import DiscussionBoard from "./components/discussionBoard/DiscussionBoard"
import Comments from "./components/commentsPage/Comments"
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/loginSignUp" element={<LoginSignUpPage/>}/>
        <Route path="/discussionBoard" element={<DiscussionBoard/>}/>
        <Route path="/discussionBoard/:id" element={<Comments/>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
