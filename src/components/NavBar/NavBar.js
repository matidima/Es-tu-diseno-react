import './NavBar.css';
import CartWidget from './CartWidget';
import img from "../../img/logo.jpeg"

function NavBar() {
    return(
        <>
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
                        <li><CartWidget/></li>
                    </ul>
                </div>
            </nav>
        </header>
        </>
    )
}

export default NavBar;