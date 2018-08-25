import * as React from 'react';
import * as renderer from 'react-test-renderer';
import App from '../App';
import { StaticRouter } from 'react-router';

describe('App.tsx', () => {
  it('should render correctly', () => {
    const filledTree = renderer
      .create(
        <StaticRouter location="someLocation" context={{}}>
          <App />
        </StaticRouter>,
      )
      .toJSON();
    expect(filledTree).toMatchSnapshot();
  });
});
