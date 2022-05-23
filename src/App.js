import './App.css';
import { Navbar } from './Components/Navbar';
import { Paper } from './Components/Paper';
import { ColumnLeft } from './Components/ColumnLeft';
import { MenuRight } from './Components/MenuRight';
import { useState } from 'react';

const App = () => {
    // const [content, setContent] = useState("bogeys");

    // const testFun = () => {
    //     setContent("hfghfgh");
    // }
    // // setContent("ghfgh");

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
