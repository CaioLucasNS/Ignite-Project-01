import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

import styles from "./App.module.css";

import "./global.css";

function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Caio Lucas"
            content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga, inventore corporis voluptatem architecto iure alias id dignissimos natus dolorem veniam porro, totam adipisci asperiores pariatur consequuntur. Corporis ex ea asperiores?"
          />
          <Post
            author="Carlos Lima"
            content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga, inventore corporis voluptatem architecto iure alias id dignissimos natus dolorem veniam porro, totam adipisci asperiores pariatur consequuntur. Corporis ex ea asperiores?"
          />
          <Post
            author="Thiago Franca"
            content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga, inventore corporis voluptatem architecto iure alias id dignissimos natus dolorem veniam porro, totam adipisci asperiores pariatur consequuntur. Corporis ex ea asperiores?"
          />
        </main>
      </div>
    </div>
  );
}

export default App;
