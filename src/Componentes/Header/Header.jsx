import "./Header.scss"

import Logomarca from "./logo.png";
import Search from "./search.png";


const Header = ()=>{

    return(

        <header className="cabecalho">

            <img src={Logomarca} alt="Logo" />
            <div className="cabecalho__container">
                <input className="cabecalho__input" type="text" placeholder="O que você progura..." />
                <img src={Search} alt="Icone Lupa" />
            </div>

        </header>


    )

};


export default Header