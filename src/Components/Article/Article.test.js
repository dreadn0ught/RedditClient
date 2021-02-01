import { shallow } from "enzyme";
import Article from "./Article";
import Image from "../Image/Image";
import NumberField from "../NumberField/NumberField";
import DateField from "../DateField/DateField";

describe("Article", () => {
  it("Displays a div with class article", () => {
    const wrapper = shallow(<Article />);
    expect(wrapper.find(".article")).toHaveLength(1);
  });

  it("Contains the article title", () => {
    const title = "Test title";
    const link_to_article = "test link";
    const article = { title: title, link_to_article: link_to_article };

    const wrapper = shallow(<Article article={article}/>);
    expect(wrapper.find('h2').text()).toEqual(expect.stringContaining(title));
  });

  it("Renders an Image component", () => {
    const url = "test url";
    const article = { img : url };

    const wrapper = shallow(<Article article={article} />);

    expect(wrapper.exists(Image)).toBe(true);
    expect(wrapper.find(Image).props().url).toEqual(url);
  });

  it("Uses number fields for the votes and comments numebrs", () => {
    const wrapper = shallow(<Article />);
    expect(wrapper.find(NumberField)).toHaveLength(2);
  });

  it("Contains the number of votes", () => {
    const votes = 1000;
    const article = { votes: votes };

    const wrapper = shallow(<Article article={article} />);

    expect(wrapper.find(NumberField).first().props().number).toEqual(votes);
  });

  it("Contains the number of comments in the article", () => {
    const comments = 1000;
    const article = { comments: comments };

    const wrapper = shallow(<Article article={article} />);

    expect(wrapper.find(NumberField).at(1).props().number).toEqual(comments);
  });

  it("Contains the article author", () => {
    const author = "Test author";
    const article = { author: author };

    const wrapper = shallow(<Article article={article}/>);
    expect(wrapper.find('.articleAuthor').text()).toEqual(expect.stringContaining(author));
  });

  it("Renders a date component", () => {
    const date = "123456";
    const article = { date: date };

    const wrapper = shallow(<Article article={article} />);
    expect(wrapper.exists(DateField)).toBe(true);
    expect(wrapper.find(DateField).props().date).toEqual(date);
  });

  it("Clicking the main image, title, comment logo or comment number takes you to the post", () => {

    const url = "test url";
    const article = { link_to_article: url };
    const expected = [
      url,
      "https://freeicons.io",
      "https://freeicons.io/profile/3031",
      "https://freeicons.io/profile/3335"
    ];

    const wrapper = shallow(<Article article={article} />);

    wrapper.find("a").forEach( node => {
      expect(expected).toContain(node.props().href)
    });



  });
});
