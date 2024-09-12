import styles from "./CreatePost.module.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthValue } from "../../context/authContext";
import { useInsertDocument } from "../../hooks/useInsertDocument";

const CreatePost = () => {
    const [title, setTitle] =  useState("");
    const [image, setImage] = useState("");
    const [body, setBody] = useState("");
    const [tags, setTags] = useState([]);
    const [formError, setFormError] = useState("");

    const navigate = useNavigate("");

    const { user } = useAuthValue();
    const {insertDocument, response } = useInsertDocument("post"); 

    const handleSubmit = (e) =>{ 
        e.preventDefault();

        setFormError("");

        try{
            new URL(image)

        } catch (error){
            setFormError("A imagem precisa ser uma URL")
        }

        const tagsArray = tags.split(",").map(tag => tag.trim().toLowerCase());

        if(!title || !image || !tags || !body){
            setFormError("Preencha todos os campos")
        }

        if(formError) return;

        insertDocument({
            title,
            image,
            body, 
            tagsArray,
            uid: user.uid,
            createdBy: user.displayName
        })
        navigate("/")
    }

    return(
        <div className={styles.create_post}>
            <h1>Crie seu post</h1>
            <p>Compartilhe suas ideias</p>
            <form onSubmit={handleSubmit}>
                <label>
                    <span>Titulo:</span>
                    <input 
                        type="text" 
                        name="title" 
                        required 
                        placeholder="Ex. A única forma dos homens chegarem a algum lugar é deixando algo para trás."
                        onChange={(e) => setTitle(e.target.value)}
                        value={title}
                    />
                </label>
                <label>
                    <span>URL da Imagem:</span>
                    <input 
                        type="text" 
                        name="image" 
                        required 
                        placeholder="Insira a URL de uma imagem"
                        onChange={(e) => setImage(e.target.value)}
                        value={image}
                    />
                </label>
                <label>
                    <span>Conteudo:</span>
                    <textarea
                        className={styles.create_textearea}
                        name="body" 
                        required 
                        placeholder="Ex. Sim, minha força está na solidão. Não tenho medo nem de chuvas tempestivas nem das grandes ventanias soltas, pois eu também sou o escuro da noite."
                        onChange={(e) => setBody(e.target.value)}
                        value={body}
                    ></textarea>
                </label>
                <label>
                    <span>Tags:</span>
                    <input 
                        type="text" 
                        name="tags" 
                        required 
                        placeholder="Insira as tags separadas por virgulas."
                        onChange={(e) => setTags(e.target.value)}
                        value={tags}
                    />
                </label>
                
                {!response.loading && <button className="btn">Criar Post</button>}
                {response.loading && <button className="btn" disabled>Enviando</button>}
                {response.error && <p className="error">{response.error}</p>}
                {formError && <p className="error">{formError}</p>}
                {response.document && !response.loading && !response.error && <p className="success">Post criado com sucesso!</p>}
            </form>
        </div>
    )
}

export default CreatePost;