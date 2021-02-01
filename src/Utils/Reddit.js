const Reddit = {


  getImage: (data) => {
    if(['self', 'default', 'nsfw'].indexOf(data.thumbnail) < 0) {
      if(data.url.endsWith(".jpg")) {
        return data.url ;
      }
    }

    return null;
  },

  redditFetch: async (feedName) => {
    const response = await fetch(`https://www.reddit.com/r/${feedName}.json?limit=256$raw_json=1`);

    return await response.json();
  },

  getFeed: async (feedName) => {
    if(!feedName) {
      return [];
    }

    const responseJson = await Reddit.redditFetch(feedName);

    if(responseJson.error) {
      return [];
    }

    const feed = responseJson.data.children.map((entry, id) => {
      const { data } = entry;
      const title = data.title;
      const img = Reddit.getImage(data);
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
