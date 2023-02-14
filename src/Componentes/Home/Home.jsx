import Header from "../Header/Header";
import Menu from "../Menu/Menu";

import Banner from '../../assets/banner.png'

import './StyleHome.scss'
import Galeria from "../Galeria";


const Home = ()=>{

    return(

        <>

            <header>
                <Header />
            </header>

            <main>
                <section  className="principal" >
                     <Menu />
                     <div className="principal__imagem">
                        <h1>A gelera mais completa do espaço</h1>
                        <img src={Banner} alt="A imagem da Terra Vista do Espaço"></img>
                     </div>
                </section>
                
            </main>

            <div className="galeria">
                <Galeria />
            </div>


             
        </>


    )


};


export default Home