import fetchPosts from '../utils/fetchPosts.js';

test('fetchPosts returns an array', () => {
  expect(fetchPosts()).not.toBeNull();
  expect(fetchPosts()).toEqual([]);
})

test('fetchPosts non empty array holds objects', () => {
  expect(fetchPosts()[0]).toContain({});
})

// equal an array
// 
// handle errors
// non empty array holds objects
// non empty array holds correct data
// store updates correctly


// describe('App', () => { 
//   // test case 
//   it('renders correctly', () => { 
//     const { getByText } = render(<App />); 
//     expect(getByText(/Edit/i)).toBeInTheDocument(); 
//   }); 
// });