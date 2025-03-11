import { test as base, expect, request } from '@playwright/test';

const test = base.extend<{ apiClient: request.Request }>(
  {
    apiClient: async ({ request }, use) => {
      await use(request.newContext({
        baseURL: 'https://jsonplaceholder.typicode.com'
      }));
    }
  }
);

test('GET request using fixture', async ({ apiClient }) => {
  const response = await apiClient.get('/posts/1');
  
  expect(response.status()).toBe(200);
  const data = await response.json();
  expect(data.id).toBe(1);
});
