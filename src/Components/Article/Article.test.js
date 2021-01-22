import { shallow } from "enzyme";
import Article from "./Article";

describe("Article", () => {
  it("Displays a div with class article", () => {
    const wrapper = shallow(<Article />);
    expect(wrapper.find(".article")).toHaveLength(1);
  });

  // TODO
  it("Contains the article title", () => {
  });

  it("Contains the article img", () => {
  });

  it("Contains the number of votes", () => {
  });

  it("Contains the number of comments in the article", () => {
  });

  it("Contains the a link to the article", () => {
  });

  it("Contains the article author", () => {
  });

  it("Contains the article date", () => {
  });
});
