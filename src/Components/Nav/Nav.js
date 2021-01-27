import "./Nav.css"
import Logo from "./logo.png"

function Nav(props) {

  const feedName = props.feedName;
  const setFeedName = props.setFeedName;

  const onChange = (event) => {
    setFeedName(event.target.value);
  }

  return (
    <header className="nav">
      <img id="headerLogo" src={Logo} alt="Reddit logo"/>
      <h1 id="title">Reddit Client</h1>
      <div id="feedTitle">
        <span>r/</span>
        <input id="feedInput" value={feedName} onChange={onChange} />
      </div>
    </header>
  );
}

export default Nav;
