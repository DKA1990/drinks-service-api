import request from 'supertest';
import { app } from '../app';

test('GET /tea should return correct object when given name Oolong', async () => {
    const res = await request(app)
    .get('/tea')
    .query({ teaName: 'Oolong' });

    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual({
        drinkType: 'Tea',
        name: 'Oolong',
    });
});

test('GET /tea should return correct object when no name given (default to Black)', async () => {
    const res = await request(app)
    .get('/tea')

    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual({
        drinkType: 'Tea',
        name: 'Black',
    });
});