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

  it("Renders an Image component", () => {
  });

  it("Sends the article image url to the Image Component", () => {
  });

  it("Contains the number of votes", () => {
  });

  it("Contains the number of comments in the article", () => {
  });

  it("Contains the a link to the article", () => {
  });

  it("Contains the article author", () => {
  });

  it("Renders a date component", () => {
  });

  it("Sends the date to the date component", () => {
  });
});
