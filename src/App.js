// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sidebar from './components/sidebar/sidebar';
import Setting from './components/setting/setting';
// import Home from './components/home/home'
// import Navbar from './components/Top/top'

function App() {
  return (
    <BrowserRouter>
    {/* <Navbar/> */}
    <Sidebar/>
<Routes>
{/* <Route path="/home" element={<Home />} />
          <Route path="/setting" element={<Setting />} /> */}
</Routes>
    </BrowserRouter>
  );
}

export default App;
