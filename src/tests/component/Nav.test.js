import React from 'react';
import { shallow } from 'enzyme';
import { Navbar } from 'react-bootstrap';
import Nav from '../../components/Nav';

describe('Nav', () => {
  it('should render a <Nav />', () => {
    const wrapper = shallow(<Nav />);
    expect(wrapper.find(Navbar)).toHaveLength(1);
  });
});
