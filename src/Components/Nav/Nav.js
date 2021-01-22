import "./Nav.css"
import "./logo.png"

function Nav(props) {

  const thread = props.thread || "UKPolitics";

  return (
    <header className="nav">
      <div id="headerLogo">
      </div>
      <h1 id="title">Reddit Client</h1>
      <h1 id="feedTitle">{thread}</h1>
    </header>
  );
}

export default Nav;
