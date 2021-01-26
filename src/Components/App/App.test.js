import { render, screen } from '@testing-library/react';
import { shallow } from 'enzyme';
import App from './App';
import Nav from '../Nav/Nav';
import Feed from '../Feed/Feed';

describe('App', () => {

  it('renders Reddit title', () => {
    render(<App />);
    const linkElement = screen.getByText(/Reddit/i);
    expect(linkElement).toBeInTheDocument();
  });

  it('has a navigation bar', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists(Nav)).toBe(true);
  });

  it('has a reddit feed', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists(Feed)).toBe(true);
  });

  // TODO
  it('Calls Reddit.getfeed once on load', () => {});

  it('Calls Reddit.getfeed every 5 minutes', () => {});

  it('Calls Reddit.getFeed when the feedName is updated', () => {});

  it('Stores a feed state', () => {});

  it('Passes the feed state to the Feed Component', () => {});

  it('Stores the current reddit feed', () => {});

  it('Contains a function to update the current reddit feed', () => {});

  it('Passes the function to update the reddit feed to the Nav Component', () => {});
});
