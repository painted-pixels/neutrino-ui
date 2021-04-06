import React from 'react'
import { shallow } from 'enzyme';
import Button from '../';

describe('Button', () => {
  it('should pass', () => {
    const wrapper = shallow(<Button />)
    expect(wrapper).toBeTruthy()
    expect(true).toBeTruthy();
  });
});