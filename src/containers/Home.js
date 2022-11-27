import '../assets/css/Home.css'
import Carrousel from '../components/Carrousel'
import Navbar from '../components/Navbar'

const Home = ()=>{

    return (
        <div className= 'Home' >
        <Navbar></Navbar>      
        <Carrousel ></Carrousel>
        </div>
    )
}

export default Home