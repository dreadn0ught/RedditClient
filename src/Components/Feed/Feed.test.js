import { shallow , mount } from 'enzyme';
import Feed from './Feed';
import Article from '../Article/Article';

describe("Feed", () => {
  it("Creates a div with class nav", () => {
    const wrapper = shallow(<Feed />);
    expect(wrapper.find('.feed')).toHaveLength(1);
  });

  it("Creates a list of articles", () => {
    const feed = [
      {
        id: 0,
        title: "Title one",
        img: "img.png",
        votes: 400,
        comments: 20,
        link_to_article: "link"
      },
      {
        id: 1,
        title: "Title two",
        img: "img.png",
        votes: 400,
        comments: 20,
        link_to_article: "link"
      },
    ];

    const wrapper = mount(<Feed feed={feed} />);

    expect(wrapper.find('.feed')).toBeDefined();
    expect(wrapper.find(Article)).toHaveLength(feed.length);

  });
});

