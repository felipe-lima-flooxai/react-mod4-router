import React from 'react';
import './Content.css';

import About from "../../views/examples/About"
import Home from "../../views/examples/Home"
import { Switch, Routes, Route} from "react-router-dom"

const Content = props =>{

    return (
        <div className='Content'>
            <Routes>
                <Route path="/about" element={<About/>}></Route>
                <Route path="/" element= {<Home/>}></Route>
            </Routes>
            
        </div>)
}

export default Content

