import request from 'supertest';
import { app } from '../app';

test('GET /coffee should return correct object when given name Latte', async () => {
    const res = await request(app)
    .get('/coffee')
    .query({ coffeeName: 'Latte' });

    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual({
        drinkType: 'Coffee',
        name: 'Latte',
    });
});

test('GET /coffee should return correct object when given name Americano', async () => {
    const res = await request(app)
    .get('/coffee')
    .query({ coffeeName: 'Americano' });

    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual({
        drinkType: 'Coffee',
        name: 'Americano',
    });
});

test('GET /coffee should return correct object when no name given (default to Latte)', async () => {
    const res = await request(app)
    .get('/coffee')

    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual({
        drinkType: 'Coffee',
        name: 'Latte',
    });
});