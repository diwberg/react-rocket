import { Avatar } from "./Avatar";
import style from "./Sidebar.module.css"
import { FaEdit } from "react-icons/fa";

export function Sidebar(){

    return (
        <aside className={style.sidebar}>
            <img className={style.cover} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRw9-0wqWF4qc-4wOpJ9N30XDTEvBSmuVOgcQ&usqp=CAU"  />
            <div className={style.profile}>
                <Avatar 
                src="https://github.com/diwberg.png" 
                alt="Profile" />
                <strong>Diwberg Andrade</strong>
                <span>Software Engineer</span>
            </div>
            <footer>
                <a href="#">
                <FaEdit size={20} />
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    )
}