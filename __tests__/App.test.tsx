import React from 'react';
import {render} from '@testing-library/react-native';
import App from '../App';

describe('App', () => {
  it('renders the app with initial state', () => {
    const {getByText} = render(<App />);
    const appText = getByText('My App');
    expect(appText).toBeDefined();
  });
});
