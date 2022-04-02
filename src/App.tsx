import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './shared/NavBar';
import Home from './views/Home/Home';
import Footer from './shared/Footer';
function App() {
    return (
        <div className='App bg-blend-darken bg-background w-full '>
            <NavBar />
            <Home />
            <Footer />
        </div>
    );
}

export default App;
