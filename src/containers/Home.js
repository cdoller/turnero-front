import '../assets/css/Home.css'
import Carrousel from '../components/Carrousel'
import Header from '../components/Header'


const Home = ()=>{

    return (
        <div className= 'Home' >
        <Header></Header>        
        <Carrousel ></Carrousel>
        </div>
    )
}

export default Home