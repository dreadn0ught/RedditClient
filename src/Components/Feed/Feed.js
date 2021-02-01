import InfiniteScroll from 'react-infinite-scroll-component';
import { useState, useMemo, useEffect } from 'react';
import Article from "../Article/Article"

function Feed(props) {

  const feed = useMemo(() => props.feed || [], [props.feed]);

  const [items, setItems] = useState([]);
  const [hasMore, setHasMore] = useState(true);


  useEffect(() => {
    setItems(feed.slice(0,5));
    setHasMore(true);
  }, [feed]);

  const fetchMoreData = () => {
    // Take next 5 articles and add them to items
    if(items.length + 5 > feed.length) {
      setItems(feed);
    } else {
      setItems((feed.slice(0, items.length + 5)));
    }
    if(items.length === feed.length) {
      setHasMore(true);
    }
  };

  return (
    <main className="feed">
      <InfiniteScroll
        dataLength={items.length}
        next={fetchMoreData}
        hasMore={hasMore}
      >
      {
        items.map(article => <Article key={article.id} article={article} />)
      }
      </InfiniteScroll>
    </main>
  );
}
    /*{
      feed.map(article => <Article key={article.id} article={article} />)
    }*/


export default Feed;
