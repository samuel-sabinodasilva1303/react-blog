import styles from "./Home.module.css";

import { useFetchDocuments } from "../../hooks/useFetchDocuments";
import { useNavigate, Link } from "react-router-dom";

import { useState } from "react";
import PostDetails from "../../components/PostDetails";


const Home = () => {
  const { documents: posts, loading, error } = useFetchDocuments("post");

  const navigate = useNavigate();

  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (query) {
      return navigate(`/search?q=${query}`);
    }
  };

  return (
    <div className={styles.home}>
      <h1>Veja os nossos posts mais recentes</h1>

      <form className={styles.search_form} onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Ou busque por tags..."
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="btn btn-dark">Pesquisar</button>
      </form>

      <div className="post-list">
        {loading && <p>Carregando...</p>}
        {error && <p>Ocorreu um erro: {error}</p>}

        {posts && posts.map((post) => <PostDetails key={post.id} post={post} />)}

        {!loading && posts && posts.length === 0 && (
          <div className={styles.noposts}>
            <p>Não foram encontrados posts</p>
            <Link to="/posts/create" className="btn">
              Criar primeiro post
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
