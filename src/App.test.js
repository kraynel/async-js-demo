import React from 'react';
import renderer from 'react-test-renderer';

import App from './App';

describe('App', () => {
  it('should render without crashing', () => {
    const component = renderer.create(<App />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
