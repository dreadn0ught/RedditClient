import './App.css';

import Nav from "../Nav/Nav";
import Feed from "../Feed/Feed";
import Reddit from "../../Utils/Reddit";

function App() {

  const feed = Reddit.getFeed();

  return (
    <div className="App">
      <Nav />
      <Feed feed={feed}/>
    </div>
  );
}

export default App;
