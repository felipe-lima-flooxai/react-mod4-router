import React from 'react';
import './Content.css';

import Param from "../../views/examples/Param"
import About from "../../views/examples/About"
import Home from "../../views/examples/Home"
import { Routes, Route} from "react-router-dom"

const Content = props =>{

    return (
        <div className='Content'>
            <Routes>
                <Route path="/about" element={<About/>}></Route>
                <Route path="/" element= {<Home/>}></Route>
                <Route path="/param/:id" element= {<Param/>}></Route>
            </Routes>
            
        </div>)
}

export default Content

