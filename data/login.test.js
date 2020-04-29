const request = require('supertest');
const app = require('../app');

describe('Successful Login', () => {
    it('Should expect proper response for successfully logging in and receiving a JWT', async () => {
        const res = await request(app)
        .post('/api/auth/login')
        .send({
            email: "test4@test.com",
            password: "test"
        });
        expect(typeof(res.body.token)).toBe(typeof('')); // Token is only generated on successful validation of email and password combination
    });
});

describe('Failed Login - invalid password', () => {
    it('Should expect proper response for wrong password', async () => {
        const res = await request(app)
        .post('/api/auth/login')
        .send({
            email: "test4@test.com",
            password: "ABC" // Intentionally wrong password
        });
        expect(res.body.message).toBe('Invalid Password');
    });
});

describe('Failed Login - Invalid email', () => {
    it('Should expect proper response for invalid email', async () => {
        const res = await request(app)
        .post('/api/auth/login')
        .send({
            email: "not-a-real-email@lol.com",
            password: "this is irrelvant for this test but needs to exist"
        });
        expect(res.body.message).toBe('No such user exists. Please check your spelling, or create an account.');
    });
});