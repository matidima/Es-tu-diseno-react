import './NavBar.css';
import img from "../img/logo.jpeg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

function NavBar() {
    return(
        <header>
            <nav>
                <div className="logo">
                    <img src={img} alt="logo Es Tu Diseño"/>
                    <h1>Es Tu Diseño</h1>
                </div>
                <div className="seccionesContainer"> 
                    <ul className="secciones">
                        <li>Inicio</li>
                        <li>Iniciar Sesión</li>
                        <li>Nosotros</li>
                        <li><FontAwesomeIcon icon={faCartShopping}/></li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default NavBar;