import fetchPosts from '../utils/fetchPosts.js';

test('fetchPosts returns an array', async () => {
  // expect(fetchPosts()).not.toBeNull();\
  const data = await fetchPosts();
  expect(Array.isArray(data)).toEqual(true);
})

// test('fetchPosts fetches the correct url', () => {
//   expect(fetchPosts()).toEqual()
// })

// test('fetchPosts non empty array holds objects', () => {
//   expect(fetchPosts()[0]).toContain({});
// })

// returns an array
// 
// handle errors

// provided text search affects the url
// provided category affects the url

// non empty array holds correct data
// store updates correctly


// describe('App', () => { 
//   // test case 
//   it('renders correctly', () => { 
//     const { getByText } = render(<App />); 
//     expect(getByText(/Edit/i)).toBeInTheDocument(); 
//   }); 
// });