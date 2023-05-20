import style from  "./App.module.css"
import "./global.css"
import { Header } from "./components/Header"
import { Post } from "./components/Post"
import { Sidebar } from "./components/Sidebar"


export function App() {

  return (
    <>
      <Header />

      <div className={style.wrapper}>
      <Sidebar />
      <main>
        <Post 
          author="Diwberg Andrade"
          content="Software Engineer"
          post="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam odio fugit minima natus repudiandae nesciunt placeat ad, qui ratione reprehenderit, voluptas, sapiente laborum incidunt optio quam architecto! Non, voluptatem neque."
          link="#devReact"
        />

        <Post 
          author="Diwberg Andrade"
          content="Software Engineer"
          post="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam odio fugit minima natus repudiandae nesciunt placeat ad, qui ratione reprehenderit, voluptas, sapiente laborum incidunt optio quam architecto! Non, voluptatem neque."
          link="#devReact"
        />
        <Post 
          author="Diwberg Andrade"
          content="Software Engineer"
          post="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam odio fugit minima natus repudiandae nesciunt placeat ad, qui ratione reprehenderit, voluptas, sapiente laborum incidunt optio quam architecto! Non, voluptatem neque."
          link="#devReact"
        />
        <Post 
          author="Diwberg Andrade"
          content="Software Engineer"
          post="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam odio fugit minima natus repudiandae nesciunt placeat ad, qui ratione reprehenderit, voluptas, sapiente laborum incidunt optio quam architecto! Non, voluptatem neque."
          link="#devReact"
        />
        <Post 
          author="Diwberg Andrade"
          content="Software Engineer"
          post="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam odio fugit minima natus repudiandae nesciunt placeat ad, qui ratione reprehenderit, voluptas, sapiente laborum incidunt optio quam architecto! Non, voluptatem neque."
          link="#devReact"
        />
        <Post 
          author="Diwberg Andrade"
          content="Software Engineer"
          post="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam odio fugit minima natus repudiandae nesciunt placeat ad, qui ratione reprehenderit, voluptas, sapiente laborum incidunt optio quam architecto! Non, voluptatem neque."
          link="#devReact"
        />
      </main>
      </div>
    </>
  )
}

