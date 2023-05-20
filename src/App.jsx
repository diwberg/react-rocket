import style from  "./App.module.css"
import "./global.css"
import { Header } from "./components/Header"
import { Post } from "./components/Post"
import { Sidebar } from "./components/Sidebar"

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/diwberg.png",
      name: "Diwberg de Andrade",
      role: "Software Engineer"
    },
    content: [
      {type: "paragraphy",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam odio fugit minima natus repudiandae nesciunt placeat ad, qui ratione reprehenderit, voluptas, sapiente laborum incidunt optio quam architecto! Non, voluptatem neque.",},
    {type: "paragraphy",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam odio fugit minima natus repudiandae nesciunt placeat ad, qui ratione reprehenderit, voluptas, sapiente laborum incidunt optio quam architecto! Non, voluptatem neque.",},
    {type: "link", text: "#Link",},
    {type: "link", text: "#React",},
    {type: "link", text: "#Quality",},
    {type: "link", text: "#Quality",},
    {type: "link", text: "#Quality",},

  ],
    publish: new Date("2023-05-19 23:00:00")
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/diwberg.png",
      name: "Amandha de Andrade",
      role: "QA Engineer"
    },
    content: [
      {type: "paragraphy",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam odio fugit minima natus repudiandae nesciunt placeat ad, qui ratione reprehenderit, voluptas, sapiente laborum incidunt optio quam architecto! Non, voluptatem neque.",},
    {type: "paragraphy",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam odio fugit minima natus repudiandae nesciunt placeat ad, qui ratione reprehenderit, voluptas, sapiente laborum incidunt optio quam architecto! Non, voluptatem neque.",},
    {type: "link", text: "#devReact"},
    {type: "link", text: "#devQuality"},
    {type: "link", text: "#fullStack"},
  ],
    link: ["#devReact", "#quality"],
    publish: new Date("2023-05-20 09:00:00")
  },

]

export function App() {

  return (
    <>
      <Header />

      <div className={style.wrapper}>
      <Sidebar />
      <main>
        {posts.map((posts,index) =>{
          return (
          <Post 
            key={index}
            author={posts.author}
            content={posts.content}
            publish={posts.publish}
          />

          )
        })}

      </main>
      </div>
    </>
  )
}

