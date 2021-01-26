import { useState, useEffect } from 'react';

import './App.css';

import Nav from "../Nav/Nav";
import Feed from "../Feed/Feed";
import Reddit from "../../Utils/Reddit";

function App() {

  const [feedName, setFeedName] = useState("popular");

  const [feed, setFeed] = useState([{
    id: 0,
    title: "Loading.."
  }]);

  useEffect(() => {
    Reddit.getFeed(feedName).then(f => setFeed(f));
  }, [feedName]);

  return (
    <div className="App">
      <Nav feedName={feedName} setFeedName={setFeedName}/>
      <Feed feed={feed}/>
    </div>
  );
}

export default App;
