import { shallow, mount } from 'enzyme';
import App from './App';
import Nav from '../Nav/Nav';
import Feed from '../Feed/Feed';

const Reddit = {
  getFeed: async (feedName) => {
    return [];
  }
};

jest.mock('../../Utils/Reddit', () => (Reddit));

describe('App', () => {

  /* WARNING this is to stop an error with our version of enzyme and react17
  * Once this is fixed this should be removed
  */
  beforeEach(function() {
    this.originalError = console.error;
    console.error = jest.fn();
  });

  afterEach(function() {
    console.log = this.originalError;
  });


  it('renders Reddit title', () => {
    const wrapper = mount(<App />);
    expect(wrapper.text()).toEqual(expect.stringContaining("Reddit"));
  });

  it('has a navigation bar', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists(Nav)).toBe(true);
  });

  it('has a reddit feed', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists(Feed)).toBe(true);
  });

  it('Passes the feed state to the Feed Component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Feed).props().feed).toEqual([{id:0, title:"Loading.."}]);
  });

  it('Calls Reddit.getfeed on on load', done => {
    const mockGetFeed = jest.spyOn(Reddit, 'getFeed');
    const wrapper = mount(<App />);

    setTimeout(() => {
      expect(mockGetFeed).toHaveBeenCalled();
      done();
    });
  });

  /* Still can't get this working, this requires a refactor of the state to
   * use a Reducer
  it('Calls Reddit.getFeed when the feedName is updated', done => {

    const feed = "test";
    const mockGetFeed = jest.spyOn(Reddit, 'getFeed').mockReturnValue(new Promise(resolve => []));
    const wrapper = shallow(<App />);

    wrapper.setState({ feed: feed });
    setTimeout(() => {
      expect(mockGetFeed).toHaveBeenCalledWith(feed);
      done();
    });
  });

  it('Stores the current reddit feed', () => {});

  it('Contains a function to update the current reddit feed', () => {});

  it('Passes the function to update the reddit feed to the Nav Component', () => {});
  */
});
