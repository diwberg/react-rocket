import { FaTrashAlt, FaRegThumbsUp } from "react-icons/fa";
import style from "./Comment.module.css"
import { Avatar } from "./Avatar";

export function Comment(props) {

    return (
        <div className={style.comment}>
            <Avatar className="avatarComment" src="https://github.com/diwberg.png" alt="Profile" />
            <div className={style.commentBox}>
                <div className={style.commentContent}>
                    <header>
                        <div className={style.authorAndTime}>
                            <strong>{props.author}</strong>
                            <time
                                title='18 de Março ás 23:00'
                                dateTime='2023-03-18 23:00:00'>
                                Cerca de 1h atrás
                            </time>
                        </div>

                        <button title="Deletar comentário">
                            <FaTrashAlt size={20} />
                        </button>
                    </header>

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta consectetur iusto maxime qui dolor? Eveniet placeat earum sunt quibusdam! Ad numquam aut nemo optio fugit ipsam placeat ab, facilis eos.</p>

                </div>
                <footer>
                    <button>
                    <FaRegThumbsUp size={20} />Gostei <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}
