import React from 'react';
import "./comment.css";

const Comment = ({ body, title, userId }) => {
    return (
        <article className="comment">
            <header  className="comment-header">
                <h2 className="comment-header__title">{title}</h2>
                <h3 className="comment-header__user">User ID: {userId}</h3>
            </header>
            <section className="comment-body">
                {body}
            </section>
        </article>
    );
}

export default Comment;