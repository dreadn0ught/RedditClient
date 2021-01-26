import Snoowrap from 'snoowrap';

const feed = [
  {
    id: 0,
    title: "Title one",
    img: "https://images.unsplash.com/photo-1534870439272-475575042b61?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
    votes: 400,
    comments: 20,
    link_to_article: "link",
    author: "u/boo",
    date: "today"
  },
  {
    id: 1,
    title: "Title two",
    img: "https://images.unsplash.com/photo-1534870439272-475575042b61?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
    votes: 400,
    comments: 20,
    link_to_article: "link",
    author: "u/boo",
    date: "today"
  },
];

// Global reddit connection
let reddit;

const Reddit = {

  getRedditConnection: () => {

    const userAgent = "";
    const clientId = "VuHHacyg8NcL9A";
    const clientSecret = "bciUtL8x_x-GXvQ4pDi9PtoqMJ8SIw";
    const redirectUri = "https://dreadn0ught.github.io/RedditClient/";
    const scope = "identity mysubreddits";
    const state = "ABCDEFG";
    const link = `https://www.reddit.com/api/v1/authorize?client_id=${clientId}&response_type=code&state=${state}&redirect_uri=${redirectUri}&duration=temporary&scope=${scope}`;

    if(!reddit) {

      // Look for token in header
      const urlParams = new URLSearchParams(window.location.search);
      const error = urlParams.get('error');
      const code = urlParams.get('code');
      const stateParam = urlParams.get('state');

      if(error) {
        console.log("ERROR");
      }

      if(!code) {
        window.location = link;
      }
      /*reddit = new Snoowrap({
        userAgent: userAgent,
        clientId: clientId,
        clientSecret: clientSecret,
        refreshToken: null
      });*/

    }



    return reddit;
  },


  getFeed: (feedName="r/pics") => {
    const r = Reddit.getRedditConnection();
    return feed;
  }

};

export default Reddit;
