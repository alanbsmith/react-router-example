import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import App from '../src/components/App';

describe('Component: App', () => {
  it('should render App content', () => {
    const wrapper = shallow(
      <App />
    );

    expect(wrapper.find('.content').length).toBe(1);
  });
  it('should render the Sidenav', () => {
    const wrapper = shallow(
      <App />
    );

    expect(wrapper.find('Sidenav').length).toEqual(1);
  });

  it('should run a solid smoke test', () => {
    expect(true).toEqual(false);
  });
});
