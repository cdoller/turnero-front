import '../assets/css/Home.css'
import Carrousel from '../components/Carrousel'
import Header from '../components/Header'
import Welcome from './Welcome'

const Home = ()=>{

    return (
        <div className= 'Home' >
        <Header></Header>
        <section className='Welcome'>
            <div>
                <img src=''></img>
        <Welcome></Welcome>
            
            </div>
        </section>
        </div>
    )
}

export default Home