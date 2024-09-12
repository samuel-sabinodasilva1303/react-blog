import styles from './Footer.module.css';
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <p>MyBlog &copy; 2024 </p>
            <p>desenvolvido por <NavLink className={styles.footer_redirect} to="https://samuel-sabinodasilva1303.github.io/portifolio/" target='_blank'>Samuel Sabino</NavLink></p>
        </footer>
    )
}

export default Footer;