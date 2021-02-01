import { shallow } from 'enzyme';

import Image from './Image';

describe("Image", () => {
  it("Renders an img if image provided", () => {
    const url = "test.jpg"
    const wrapper = shallow(<Image url={ url } />);
    expect(wrapper.find("img")).toHaveLength(1);
  });


  if("Renders a div if no image provided", () => {
    const wrapper = shallow(<Image />);
    expect(wrapper.find("div")).toHaveLength(1);
  });

  it("Img src comes from props.src", () => {
    const url = "test.jpg"
    const wrapper = shallow(<Image url={ url } />);
    expect(wrapper.find("img").props().src ).toEqual(url);
  });

  it("Clicking the image takes you to the reddit post", () => {
  });

  describe('location.href', (): void => {
      const { location } = window;
      beforeAll((): void => {
          delete window.location;
          // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
          // @ts-ignore
          window.location = {
              href: '',
          };
      });
      afterAll((): void => {
          window.location = location;
      });

      it('updates when you click on the image', (): void => {
          const url = "test.jpg"
          const link = "index.html"
          const wrapper = shallow(<Image url={ url } link={ link }/>);

          wrapper.find('img').props().onClick()
          expect(window.location).toEqual(link);
      });
  });

});
