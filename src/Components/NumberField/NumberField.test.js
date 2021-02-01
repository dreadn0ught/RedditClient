import { shallow } from 'enzyme';

import NumberField from "./NumberField";

describe("NumberField", () => {
  it("Renders a div with class numberField", () => {

    const wrapper = shallow(<NumberField />);
    expect(wrapper.find(".numberField")).toHaveLength(1);
  });

  it("Displays a number", () => {

    const number = 100;
    const wrapper = shallow(<NumberField number={number} />)

    expect(wrapper.text()).toEqual(expect.stringContaining(number.toString()));
  });

  it("Uses k if the number is larger than 1000", () => {
    const number = 15100;
    const expected = "15k"
    const wrapper = shallow(<NumberField number={number} />)

    expect(wrapper.text()).toEqual(expect.stringContaining(expected));
  });

  it("Uses M if the number is larger than 1 million", () => {
    const number = 15100000;
    const expected = "15M"
    const wrapper = shallow(<NumberField number={number} />)

    expect(wrapper.text()).toEqual(expect.stringContaining(expected));
  });
});
