import './Header.css'
import { Link } from "react-router-dom"

const Header = () => {
    return (
        <nav className="App-header">
        <div><span>Restaurante React</span></div>
        <div className='links'>
            <span>
                <Link className='link' to="/">Inicio</Link>
                <Link className='link' to="/about">Sobre nosotros</Link>                
                <Link className='link' to="/contact">Reserva</Link>
            </span> 
        </div>            
    </nav>
    )
}

export default Header