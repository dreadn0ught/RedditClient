import "./Article.css";
import UpArrow from "./up_arrow.png";
import CommentsLogo from "./comments_logo.png";

function Article(props) {


  const article = props || {};

  const {
    title = '',
    img = '',
    votes = '',
    comments = '',
    link_to_article = '',
    author = '',
    date = '',
  } = article;

  return (
    <div className="article shadowBox">
      <h2>{ title }</h2>
      <img className="articlePicture" src={ img } alt="Article picture" />
      <hr className="articleDivider" />
      <div className="voting">
        <img className="upArrow" src={UpArrow} alt="UpVote Arrow" />
        <aside className="attribution">
          Icon by <a href="https://freeicons.io/profile/3031">AnjuP</a> on <a href="https://freeicons.io">freeicons.io</a>
        </aside>
        <div className="articleVotes">{ votes } </div>
      </div>
      <div className="articleFooter">
        <div className="articleAuthor">{ author }</div>
        <div className="articleDate">{ date }</div>
        <div className="footerComments">
          <img className="commentsLogo" src={CommentsLogo} alt="Comments logo" />
          <div className="articleComments">{ comments }</div>
          <aside>
            Icon by <a href="https://freeicons.io/profile/3335">MD Badsha Meah</a> on <a href="https://freeicons.io">freeicons.io</a>
          </aside>
        </div>
      </div>
    </div>
  );

}

export default Article;
