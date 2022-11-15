import '../assets/css/Home.css'
import Carrousel from '../components/Carrousel'

const Home = ()=>{

    return (
        <section className='Home'>
            <h1>Este es el home</h1>
            <div className='Cards'>
                <Carrousel></Carrousel>
                <Carrousel></Carrousel>
                <Carrousel></Carrousel>
            </div>
        </section>
    )
}

export default Home