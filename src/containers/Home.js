import '../assets/css/Home.css'
import Carrousel from '../components/Carrousel'
import Header from '../components/Header'
import Welcome from '../components/Welcome'


const Home = ()=>{

    return (
        <div className= 'Home' >
        <Header></Header>        
        <Carrousel ></Carrousel>    
        <Welcome></Welcome>
        </div>
    )
}

export default Home