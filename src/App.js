import './App.css';
import MainContent from './components/maincontent/MainContent'
import Signin from './components/signin/Signin'
import Signup from './components/signup/Signup'
import Profile from './components/profile/Profile'
import AddNurse from './components/addnurse/AddNurse'
import Nurses from './components/nurses/Nurses'
import AddTests from './components/addtests/AddTests'
import LabTests from './components/labtests/LabTests'
import MyBooking from './components/mybooking/MyBooking'
import NotFound from './components/notfound/NotFound'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TopBar from './components/topbar/TopBar'
function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <TopBar/>
      <Routes>
         <Route index element={<MainContent />} />
         <Route path="signin" element={<Signin />} />
         <Route path="signup" element={<Signup />} />
         <Route path="profile" element={<Profile />} />
         <Route path="addnurse" element={<AddNurse />} />
         <Route path="viewnurses" element={<Nurses />} />
         <Route path="addtests" element={<AddTests />} />
         <Route path="viewtests" element={<LabTests />} />
         <Route path="mybooking" element={<MyBooking />} />
         <Route path="*" element={<NotFound />} />




      </Routes>
      
    </div>
    </BrowserRouter>
  );
}

export default App;
