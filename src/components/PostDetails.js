import Styles from "./PostDetails.module.css";

import { Link } from "react-router-dom";

const PostDetails = ({post}) => {
    return(
        <div className={Styles.post_datails}>
            <img src={post.image} alt={post.title} width="300" height="300" />
            <h2>{post.title}</h2>
            <p>{post.createBy}</p>
            <div className={Styles.post_datails_content}>
                {post.tagsArray.map((tag) => (
                    <p key={tag}>
                        {tag}
                    </p>
                ))}
            </div>
            <Link to={`/posts/${post.id}`} className="btn btn-outline">Ler mais</Link>
        </div>
    )
}

export default PostDetails;