import './NavBar.css';
import CartWidget from './CartWidget';
import img from "../../img/logo.jpeg"
import { Link } from 'react-router-dom';

function NavBar() {
    return(
        <>
        <header>
            <nav className='navSuperior'>
                <Link to={`/`} className="logo">
                    <img src={img} alt="logo Es Tu Diseño"/>
                    <h1>Es Tu Diseño</h1>
                </Link>
                <div className="seccionesContainer"> 
                    <div className="secciones">
                        <Link to={`/`}>Inicio</Link>
                        <Link to={`/cuenta`}>Iniciar Sesión</Link>
                        <Link to={`/nosotros`}>Nosotros</Link>
                        <Link to={`/carrito`}><CartWidget/></Link>
                    </div>
                </div>
            </nav>
            <nav className="navInferior">
                <div className="categoriasContainer">
                    <div className="categorias">
                        <Link to={`/category/macetas`}>Macetas</Link>
                        <Link to={`/category/personajes`}>Personajes</Link>
                        <Link to={`/category/decoracion`}>Decoracion</Link>
                        <Link to={`/category/estantes`}>Estantes</Link>
                    </div>
                </div>
            </nav>
        </header>
        </>
    )
}

export default NavBar;