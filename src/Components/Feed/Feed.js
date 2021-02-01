import Article from "../Article/Article"

function Feed(props) {

  // TODO only show the top 10 articles and load as the user scrolls
  const feed = props.feed || [];

  return (
    <main className="feed">
    {
      feed.map(article => <Article key={article.id} article={article} />)
    }
    </main>
  );
}


export default Feed;
