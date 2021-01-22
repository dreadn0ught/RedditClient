import './App.css';

import Nav from "../Nav/Nav";
import Feed from "../Feed/Feed";

function App() {
  // TODO get reddit details externally
  const feed = [
    {
      id: 0,
      title: "Title one",
      img: "https://images.unsplash.com/photo-1534870439272-475575042b61?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
      votes: 400,
      comments: 20,
      link_to_article: "link",
      author: "u/boo",
      date: "today"
    },
    {
      id: 1,
      title: "Title two",
      img: "https://images.unsplash.com/photo-1534870439272-475575042b61?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
      votes: 400,
      comments: 20,
      link_to_article: "link",
      author: "u/boo",
      date: "today"
    },
  ];

  return (
    <div className="App">
      <Nav />
      <Feed feed={feed}/>
    </div>
  );
}

export default App;
