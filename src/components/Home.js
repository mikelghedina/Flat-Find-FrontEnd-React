import React from "react";
import './Home.css';
// import Research from "./components/Research/Research";


const Home =()=>(

    <React.Fragment>
    <div className='background'>
    <div className='linia1'></div>
        <div className='introFlatFind'>Flat Find te permite encontrar el precio adecuado con las caracteristicas de tu piso ideal en Barcelona.
        Te recomienda los barrios que se adecuan al precio y a tus necesidades.</div>
    </div>
    <button path='/research' className='consulta'>Empezar</button>
    </React.Fragment>






);

export default Home;
