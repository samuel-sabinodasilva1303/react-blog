import { NavLink } from 'react-router-dom';

import styles from './Navbar.module.css';

import { useAuthentication } from '../hooks/useAuthentication';
import { useAuthValue } from "../context/authContext"

const Navbar = () => {
    const { user } = useAuthValue();
    const {logout} = useAuthentication();
    return (
        <nav className={styles.navbar}>
            <NavLink to="/" className={styles.brand}>
                My <span>Blog</span>
            </NavLink>
            <ul className={styles.link_list}>
                <li>
                    <NavLink to="/" className={({isActive}) => (isActive ? styles.active : "")}>Home</NavLink>
                </li>
                <li>
                    <NavLink to="/about" className={({isActive}) => (isActive ? styles.active : "")}>Sobre</NavLink>
                </li>
                {!user &&(
                    <>
                        <li>
                            <NavLink to="/login" className={({isActive}) => (isActive ? styles.active : "")}>Entrar</NavLink>
                        </li>
                        <li>
                            <NavLink to="/cadastro" className={({isActive}) => (isActive ? styles.active : "")}>Cadastre-se</NavLink>
                        </li>
                    </>
                )}
                {user &&(
                    <>
                        <li>
                            <NavLink to="/painel" className={({isActive}) => (isActive ? styles.active : "")}>Painel</NavLink>
                        </li>
                        <li>
                            <NavLink to="/posts/create" className={({isActive}) => (isActive ? styles.active : "")}>Criar Post</NavLink>
                        </li>
                    </>
                )}
                {user && (
                    <li>
                        <button onClick={logout}>Sair</button>
                    </li>
                )}
            </ul>
        </nav>
    )
}

export default Navbar;