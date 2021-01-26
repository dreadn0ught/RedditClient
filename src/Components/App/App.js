import './App.css';

import Nav from "../Nav/Nav";
import Feed from "../Feed/Feed";
import { getFeed } from "../../Utils/Reddit";

function App() {

  const feed = getFeed();

  return (
    <div className="App">
      <Nav />
      <Feed feed={feed}/>
    </div>
  );
}

export default App;
