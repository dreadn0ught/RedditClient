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

});
