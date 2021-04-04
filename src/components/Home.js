import React from "react";
import './Home.css';
import {Link} from "react-router-dom";

const Home =()=>(

    <React.Fragment>
    <div className='background'>
        <div className='linia1'></div>
            <div className='introFlatFind'>Flat Find te guia para entcontrar el precio adecuado con las caracteristicas de tu piso ideal en los diferentes barrios de Barcelona.</div>
        </div>
        <Link to='/research' className='consulta'>Empezar</Link>
    </React.Fragment>
);

export default Home;
