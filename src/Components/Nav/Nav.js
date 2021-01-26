import "./Nav.css"
import "./logo.png"

function Nav(props) {

  const feedName = props.feedName;
  const setFeedName = props.setFeedName;

  const onChange = (event) => {
    setFeedName(event.target.value);
  }

  console.log(feedName.length);
  // Update input length
  const width = feedName.length*19;
  const style = { width: `${width}px` };

  // TODO add "r/" back in and make the input box auto resize

  return (
    <header className="nav">
      <div id="headerLogo">
      </div>
      <h1 id="title">Reddit Client</h1>
      <div id="feedTitle">
        <span>r/</span>
        <input id="feedInput" value={feedName} onChange={onChange} style={style}/>
      </div>
    </header>
  );
}

export default Nav;
