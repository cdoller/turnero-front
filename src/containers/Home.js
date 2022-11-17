import '../assets/css/Home.css'
import Carrousel from '../components/Carrousel'
import Carrousel2 from '../components/Carrousel2'

const Home = ()=>{

    return (
        <section className='Home'>
            <h1>Este es el home</h1>
            <div className='Cards'>
                <Carrousel></Carrousel>
                <Carrousel2></Carrousel2>
                

            </div>
        </section>
    )
}

export default Home