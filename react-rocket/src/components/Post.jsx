import style from '../components/Post.module.css'
import { Avatar } from "./Avatar";
import { Comment } from "./Comment"

export function Post(props){

    return (
        <article className={style.post}>
            <header>
                <div className={style.author}>
                    <Avatar className="avatarBiggest" src="https://github.com/diwberg.png" alt="Profile" />
                    <div className={style.authorInfo}>
                        <strong>{props.author}</strong>
                        <span>{props.content}</span>
                    </div>
                </div>
                <time 
                title='18 de Março ás 23:00' 
                dateTime='2023-03-18 23:00:00'>
                    Públicado há 1h
                </time>
            </header>

            <div className={style.content}>
                <p>{props.post}</p>
                <p className={style.hashs}>
                    <a href="#">{props.link}</a>
                    <a href="#">{props.link}</a>
                    <a href="#">{props.link}</a>
                </p>
            </div>

            <form className={style.commentForm}>

                <strong>Deixe seu feedback</strong>

                <textarea
                placeholder="Deixe seu comentario"
                 />
                <footer>
                 <button type="submit">Públicar</button>
                </footer>

            </form>

            <div className={style.commentList}>
            <Comment author="Diwberg de Andrade" />
            <Comment author="Diwberg de Andrade" />
            <Comment author="Diwberg de Andrade" />
            </div>
        </article>
    )
}