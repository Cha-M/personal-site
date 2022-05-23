import './App.css';
import { Navbar } from './Components/Navbar';
import { Paper } from './Components/Paper';
import { ColumnLeft } from './Components/ColumnLeft';
import { MenuRight } from './Components/MenuRight';
    

//Commented out for Netlify

// import { useState } from 'react';

const App = () => {

    return (
        <div>
            <Navbar/>

        <div className = "bodyArea">
            <ColumnLeft />
            <Paper />
            <MenuRight />
        </div>
        </div>
    );
}

export default App;
