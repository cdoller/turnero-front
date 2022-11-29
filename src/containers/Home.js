import '../assets/css/Home.css'
import Carrousel from '../components/Carrousel'
import NavbarBootstrap from '../components/NavbarBootstrap'

const Home = ()=>{    

    return (

        <div className= 'Home position-relative' id="Seccion-Home">
            <NavbarBootstrap></NavbarBootstrap>
            <Carrousel ></Carrousel>
        </div>
    )
}

export default Home