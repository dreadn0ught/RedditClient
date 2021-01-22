import Article from "../Article/Article"

function Feed(props) {

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
