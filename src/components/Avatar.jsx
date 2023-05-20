import style from "./Avatar.module.css"
export function Avatar(props) {


    console.log(style)
    return (
            <img className={style[props.className ? props.className : "avatar"]} src={props.src} title={props.title} />
    )
}