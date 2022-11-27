import '../assets/css/Home.css'
import Carrousel from '../components/Carrousel'
import Navbar from '../components/Navbar'
import { useState, useEffect } from 'react'
import NavbarBootstrap from '../components/NavbarBootstrap'

const Home = ()=>{    
    const [item, setItem] = useState(1);
    
    const handleClick =(clickedItem)=> {
        setItem(clickedItem)
    }
    

    return (

        <div className= 'Home' >
        <NavbarBootstrap></NavbarBootstrap>
        {/*<Navbar handleClick={handleClick}/>*/ }     
        <Carrousel ></Carrousel>
        </div>
    )
}

export default Home