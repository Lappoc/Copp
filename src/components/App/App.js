import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Intro } from "../Intro/Intro";
import { Nav } from "../Nav/Nav";
import Profile from "../profile/Profile";
import SearchForm from "../searchForm/Search-Form";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="intro" element={<Intro/>} />
          <Route path="profile" element={<Profile/>} />
          <Route path="search" element={<SearchForm/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
