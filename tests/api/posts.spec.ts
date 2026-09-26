import { expect, test } from '@playwright/test';

test.describe('JSONPlaceholder API', () => {
  test('GET /posts/1 returns a post', async ({ request }) => {
    const response = await request.get('https://jsonplaceholder.typicode.com/posts/1');

    expect(response.status()).toBe(200);
    const body = await response.json();
    expect(body).toMatchObject({
      id: 1,
      userId: 1,
    });
    expect(body.title).toBeTruthy();
  });

  test('POST /posts creates a new post', async ({ request }) => {
    const payload = {
      title: 'QA automation portfolio',
      body: 'Created by a Playwright API test',
      userId: 1,
    };

    const response = await request.post('https://jsonplaceholder.typicode.com/posts', {
      data: payload,
    });

    expect(response.status()).toBe(201);
    const body = await response.json();
    expect(body).toMatchObject(payload);
    expect(body.id).toBeDefined();
  });
});
