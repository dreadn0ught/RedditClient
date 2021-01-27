import { shallow, mount } from 'enzyme';
import Nav from './Nav';
import Logo from "./logo.png";

describe("Nav", () => {
  it("Creates a div with class nav", () => {
    const wrapper = shallow(<Nav />);
    expect(wrapper.find('.nav')).toHaveLength(1);
  });

  it("Displays the feedName name", () => {
    const feedName = "TestfeedName";
    const wrapper = shallow(<Nav feedName={feedName}/>);
    expect(wrapper.html()).toEqual(expect.stringContaining(feedName));
  });


  it("Contains a logo", () => {
    const wrapper = shallow(<Nav />);

    const img = wrapper.find("#headerLogo");
    expect(img).toHaveLength(1);
    expect(img.prop('src')).toEqual(Logo);

  });

  it("Calls setFeedName when the input is updated", () => {
    const setFeedNameMock = jest.fn();
    const feedName = "Test name";

    const wrapper = mount(<Nav feedName={feedName} setFeedName={setFeedNameMock}/>);
    wrapper.find('#feedInput').simulate('change');

    expect(setFeedNameMock).toBeCalledWith(feedName);
  });

  it("Updates the input with the current feedName", () => {
    const setFeedNameMock = jest.fn();
    const feedName = "Test name";

    const wrapper = mount(<Nav feedName={feedName} setFeedName={setFeedNameMock}/>);
    const input = wrapper.find('#feedInput');

    expect(input.prop("value")).toEqual(feedName);

  });
});
