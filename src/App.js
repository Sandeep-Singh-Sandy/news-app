import './App.css';
import Navbar from "./components/Navbar";
import News from "./components/News";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

console.log(process.env.REACT_APP_NEWS_API_KEY)
function App() {
  return (
    <>
    <Router>
    <Navbar />
      <Routes>
        <Route exec path='/business' element={<News  key="business" category="business" />}/>;
        <Route exec path='/entertainment' element={<News key="entertainment" category="entertainment" />}/>;
        <Route exec path='/general' element={<News key="general" category="general" />}/>;
        <Route exec path='/health' element={<News key="health" category="health" />}/>;
        <Route exec path='/science' element={<News key="science"  category="science" />}/>;
        <Route exec path='/sports' element={<News key="sports" category="sports" />}/>;
        <Route exec path="/" element={<News key="general"  />}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
