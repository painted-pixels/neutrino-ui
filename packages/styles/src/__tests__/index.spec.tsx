import React from 'react'
import { shallow } from 'enzyme';

describe('Styles', () => {
  it('should pass', () => {
    const wrapper = shallow(<div />)
    expect(wrapper).toBeTruthy()
    expect(true).toBeTruthy();
  });
});