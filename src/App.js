import logo from "./logo.svg";
import "./App.css";
import React from "react";
import {
  BrowserRouter as Router,
  Navigate,
  Routes,
  Route,
} from "react-router-dom";
import Navbar from "./Components/Navbar";
import { Suspense } from "react";
// import { Login, Home, About, Contact } from "./Pages/";

const Login = React.lazy(() => import("./Pages/Login"));
const Home = React.lazy(() => import("./Pages/Home"));
const Contact = React.lazy(() => import("./Pages/Contact"));
const About = React.lazy(() => import("./Pages/About"));

let isAuthenticated = true;

function App() {
  return (
    <div className="App">
      <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          {isAuthenticated ? (
            <Route path="/*" element={<PrivateRoutes />} />
          ) : (
            <Route path="/*" element={<PublicRoutes />} />
          )}
          {/* <Navbar />        
        <Route path='/' element={<Home/>} exact/>
        <Route path='about' element={<About/>}/>
        <Route path='contact' element={<Contact/>}/>  
        <Route path='login' element={<Login/>}/>         */}
        </Routes>
        </Suspense>
      </Router>
    </div>
  );
}

export function PrivateRoutes() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="home" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="/*" element={<Navigate to="/home" replace />} />
      </Routes>
    </>
  );
}

export function PublicRoutes() {
  return (
    <>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="/*" element={<Navigate to="/login" replace />} />
      </Routes>
    </>
  );
}

export default App;
