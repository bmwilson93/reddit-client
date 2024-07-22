import React from 'react'; 
import { render } from '@testing-library/react'; 
// your component that you want to test 
import App from '../App'; 
describe('App', () => { 
  // test case 
  it('renders correctly', () => { 
    const { getByText } = render(<App />); 
    expect(getByText(/Edit/i)).toBeInTheDocument(); 
  }); 
});