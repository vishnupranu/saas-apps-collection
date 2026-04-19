const request = require('supertest');
const app = require('../src/index');

describe('API Tests', () => {
  test('Health check should return 200', async () => {
    const response = await request(app).get('/health');
    expect(response.statusCode).toBe(200);
    expect(response.body.status).toBe('ok');
  });

  test('API root should return welcome message', async () => {
    const response = await request(app).get('/api/v1');
    expect(response.statusCode).toBe(200);
    expect(response.body.message).toContain('Welcome');
  });
});
