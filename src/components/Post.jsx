import { useState } from 'react';
import style from '../components/Post.module.css';
import { Avatar } from "./Avatar";
import { Comment } from "./Comment";
import { FaCommentAlt } from "react-icons/fa"

import { format, formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";

/**
 * 
 * @param  
 * @returns 
 */
export function Post(props){
    //console.log(props)
    const publishPtBr = format(props.publish, "dd 'de' LLLL 'ás' HH:mm'h'", {locale: ptBR,})
    const publishDateUntilNow = formatDistanceToNow(props.publish, {
        locale: ptBR,
        addSuffix: true,
    })
    const [newCommentText, setNewCommentText] = useState("")

    const [ comments, setComments ] = useState([])

    function handleCreateNewComment(event){
        event.preventDefault()
        setComments([...comments, newCommentText])
        setNewCommentText('')
    }

    function handleNewCommentChange(event){
        //event.target.setCustomValidity('')
        setNewCommentText(event.target.value)
    }

    function handleNewCommentInvalid(event){
        event.target.setCustomValidity("Você não pode fazer comentários varios")

    }

    function deleteComment(commentToDelete){
        console.log(commentToDelete)
        const commentsWithoutDeleted = comments.filter((comment,index) => {
            return index != commentToDelete;
        })

        setComments(commentsWithoutDeleted);
    }

    const isNewCommentEmpty = newCommentText.length == 0
    
    return (
        <article className={style.post}>
            <header>
                <div className={style.author}>
                    <Avatar className="avatarBiggest" src={props.author.avatarUrl} alt="Profile" />
                    <div className={style.authorInfo}>
                        <strong>{props.author.name}</strong>
                        <span>{props.author.role}</span>
                    </div>
                </div>
                <time 
                title={publishPtBr} 
                dateTime={props.publish.toISOString()}>
                    Públicado {publishDateUntilNow}
                </time>
            </header>

            <div className={style.content}>
                {props.content.map((list,index) => {
                    if(list.type == "paragraphy"){
                        return <p key={index}>{list.text}</p>
                    }else{
                        return (
                        <span key={index} className={style.hashs}>
                            <a key={index} href="#">{list.text}</a>
                        </span>
                        )
                    }
                })}

            </div>

            <form className={style.commentForm} onSubmit={handleCreateNewComment}>

            <FaCommentAlt className={style.icon} size={20} title="Deixe seu feedback" />

                <textarea
                name='comment'
                onChange={handleNewCommentChange}
                value={newCommentText}
                placeholder="Deixe seu comentário"
                onInvalid={handleNewCommentInvalid}
                required

                 />
                <footer>
                 <button name='posted' type="submit" onClick={handleCreateNewComment} disabled={isNewCommentEmpty}>Públicar</button>
                </footer>

            </form>

            <div className={style.commentList}>
            {comments.map((comment,index) => {
                    return <Comment key={index} 
                    index={index}
                    publish={Date.now()}
                    author="Diwberg de Andrade" 
                    content={comment}
                    deleteComment={deleteComment}
                    />
            })}

            </div>
        </article>
    )
}