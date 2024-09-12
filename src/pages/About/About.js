import Styles from "./About.module.css";

const About = () => {

    return (

        <div className={Styles.about}>
            <h1>Sobre o projeto mini <span>Blog</span></h1>

            <p>É um projeto que utiliza React.js no front-end e firebase no backend, assim como trabalha
                com várias reagras da tecnologia, como react router dom, hooks, autenticação, entre outras opções.
            </p>
        </div>

    )
}

export default About;