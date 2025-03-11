import { test, expect } from '@playwright/test';

test('GET request example', async ({ request }) => {
  const response = await request.get('https://jsonplaceholder.typicode.com/posts/1');
  
  expect(response.status()).toBe(200); // ✅ Check status code
  const data = await response.json();
  
  console.log(data); // ✅ Print response body
  expect(data.id).toBe(1); // ✅ Validate response data
});

test('POST request example', async ({ request }) => {
  const newPost = {
    title: 'Playwright API Testing',
    body: 'API testing with Playwright is awesome!',
    userId: 1
  };

  const response = await request.post('https://jsonplaceholder.typicode.com/posts', {
    data: newPost
  });

  expect(response.status()).toBe(201); // ✅ Created response
  const responseBody = await response.json();
  
  console.log(responseBody);
  expect(responseBody.title).toBe(newPost.title);
});

test('PUT request example', async ({ request }) => {
  const updatedPost = {
    title: 'Updated Title',
    body: 'This is an updated post body.',
    userId: 1
  };

  const response = await request.put('https://jsonplaceholder.typicode.com/posts/1', {
    data: updatedPost
  });

  expect(response.status()).toBe(200); // ✅ OK response
  const responseBody = await response.json();
  
  expect(responseBody.title).toBe(updatedPost.title);
});

test('DELETE request example', async ({ request }) => {
  const response = await request.delete('https://jsonplaceholder.typicode.com/posts/1');

  expect(response.status()).toBe(200); // ✅ OK response
});

test('GET request with authentication', async ({ request }) => {
  const response = await request.get('https://api.example.com/protected-endpoint', {
    headers: {
      Authorization: `Bearer your_token_here`
    }
  });

  expect(response.status()).toBe(200);
});
