import React from 'react';
import Nav from '../components/Nav';
import { shallow } from 'enzyme';
import { Navbar } from 'react-bootstrap';

describe('Nav', () => {
  it('should render a <Nav />', () => {
    const wrapper = shallow(<Nav />);
    expect(wrapper.find(Navbar)).toHaveLength(1);
  });
});
