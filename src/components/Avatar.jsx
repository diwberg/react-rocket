import style from "./Avatar.module.css"
export function Avatar(props) {
    return (
            <img className={style[props.className ? props.className : "avatar"]} src={props.src} title={props.title} />
    )
}