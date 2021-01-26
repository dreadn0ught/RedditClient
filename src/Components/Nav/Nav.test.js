import { shallow } from 'enzyme';
import Nav from './Nav';
import Logo from "./logo.png";

describe("Nav", () => {
  it("Creates a div with class nav", () => {
    const wrapper = shallow(<Nav />);
    expect(wrapper.find('.nav')).toHaveLength(1);
  });

  it("Displays the thread name", () => {
    const thread = "TestThread";
    const wrapper = shallow(<Nav thread={thread}/>);
    expect(wrapper.text()).toEqual(expect.stringContaining(thread));
  });

  it("UK Politics is the default thread", () => {
    const thread = "UKPolitics";
    const wrapper = shallow(<Nav />);
    expect(wrapper.text()).toEqual(expect.stringContaining(thread));
  });

  it("Contains a logo", () => {
    // TODO make this test the logo has rendered
    const wrapper = shallow(<Nav />);
    expect(wrapper.find("#headerLogo")).toHaveLength(1);
  });

  it("Calls setFeedName when the input is updated", () => {
  });

  it("Updates the input with the current feedName", () => {
  });
});
