const Reddit = {

  getFeed: async (feedName) => {

    if(!feedName) {
      return [];
    }

    const response = await fetch(`https://www.reddit.com/r/${feedName}.json?limit=256$raw_json=1`);

    const responseJson = await response.json();
    //console.log(responseJson);

    console.log(responseJson);
    if(responseJson.error) {
      console.log(responseJson);
      return [];
    }

    // TODO fix images such that it only shows them when they exist

    const feed = responseJson.data.children.map((entry, id) => {
      const { data } = entry;
      const title = data.title;
      const img = (data.thumbnail !== "self")? data.url : null;
      const votes = data.ups-data.downs;
      const comments = data.num_comments;
      const link_to_article = `https://reddit.com/${data.permalink}`;
      const author = `u/${data.author}`;
      const date = data.created;
      return {
        id,
        title,
        img,
        votes,
        comments,
        link_to_article,
        author,
        date
      };
    });

    return feed;
  }

};

export default Reddit;
