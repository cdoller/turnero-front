import '../assets/css/Home.css'
import Carrousel from '../components/Carrousel'

const Home = ()=>{

    return (
        <div>
        <section className='Home'>
            <h1>Este es el home</h1>
            <div className='Cards'>
                <Carrousel></Carrousel>
                

            </div>
        </section>
        </div>
    )
}

export default Home