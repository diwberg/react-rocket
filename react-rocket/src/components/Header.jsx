import styles from "./Header.module.css"
import falamaisLogo from "../assets/image/fala_mais_logo.svg";

export function Header() {

    return (
        <header>
            <strong className={styles.header}>
            <img src={falamaisLogo} alt="logotipo do fala mais" />
            Fala mais... [Feed]
            </strong>
        </header>
    )

}