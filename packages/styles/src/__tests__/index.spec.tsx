import React from 'react'
import {ThemeProvider} from '../';
import { shallow } from 'enzyme';

describe('ThemeProvider', () => {
  it('should pass', () => {
    const wrapper = shallow(
      <ThemeProvider>
        <div>Test</div>
      </ThemeProvider>
    )
    expect(wrapper).toBeTruthy()
    expect(true).toBeTruthy();
  });
});