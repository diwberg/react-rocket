import { FaTrashAlt, FaRegThumbsUp } from "react-icons/fa";
import style from "./Comment.module.css"
import { Avatar } from "./Avatar";

export function Comment({index, content, author, deleteComment}) {
    function handleDeleteComment(){
        deleteComment(index)
    }

    return (
        <div className={style.comment}>
            <Avatar className="avatarComment" src="https://github.com/diwberg.png" alt="Profile" />
            <div className={style.commentBox}>
                <div className={style.commentContent}>
                    <header>
                        <div className={style.authorAndTime}>
                            <strong>{author}</strong>
                            <time
                                title='18 de Março ás 23:00'
                                dateTime='2023-03-18 23:00:00'>
                                Cerca de 1h atrás
                            </time>
                        </div>

                        <button 
                        title="Deletar comentário"
                        onClick={handleDeleteComment}
                        >
                            <FaTrashAlt size={20} />
                        </button>
                    </header>

                    <p>{content}</p>

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
