import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from "./components/home/HomeContainer"
import LoginSignUpPage from "./components/loginSignUp/Login"
import DiscussionBoard from "./components/discussionBoard/DiscussionBoard"
import Comments from "./components/commentsPage/Comments"
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
// import "bootstrap/dist/css/bootstrap.min.css"



function App() {
  return (
    <div className="App">
      <header>
      <NavBar/>
      </header>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/loginSignUp" element={<LoginSignUpPage/>}/>
        <Route path="/discussionBoard" element={<DiscussionBoard/>}/>
        <Route path="/discussionBoard/:id" element={<Comments/>}/>
      </Routes>
      <footer>
        {/* <Footer/> */}
      </footer>
    </div>
  );
}

export default App;
