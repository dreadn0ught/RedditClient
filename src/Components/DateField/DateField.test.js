import { shallow } from 'enzyme';
import DateField from "./DateField";

describe("DateField", () => {
  it("renders a div with the class dateContainer", () => {
    const wrapper = shallow(<DateField />);

    expect(wrapper.find(".dateContainer")).toHaveLength(1);
  });

  it("returns the date of the article", () => {
    const input = 'December 17, 1995 03:24:00';
    const inputDate = (input => {
      const d =new Date(input);
      return d.getTime()/1000;
    })(input);
    const output = "Sun Dec 17 1995";


    const wrapper = shallow(<DateField date={inputDate} />);
    expect(wrapper.text()).toEqual(expect.stringContaining(output));
  });

  it("says 'today' if the date is today", () => {
    const inputDate = (d => {
      return d.getTime()/1000;
    })(new Date);
    const output = "Today";

    const wrapper = shallow(<DateField date={inputDate} />);
    expect(wrapper.text()).toEqual(expect.stringContaining(output));
  });

  it("says 'yesterday' if the date was yesterday", () => {
    const inputDate = (d => {
      const yesterday = new Date(d.setDate(d.getDate() - 1));
      return yesterday.getTime()/1000;
    })(new Date);
    const output = "Yesterday";

    const wrapper = shallow(<DateField date={inputDate} />);
    expect(wrapper.text()).toEqual(expect.stringContaining(output));
  });

});
