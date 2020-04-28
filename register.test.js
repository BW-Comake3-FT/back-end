const request = require('supertest');
const app = require('./app');

// describe('Test successfull registration', () => {
//     it('Should expect to register an account successfully', async () => {
//         const res = await request(app)
//         .post('/api/auth/register')
//         .send({	
//         email: "test4@test.com", // Needs to be a unique email each time to pass
//         name: "test",
//         password: "test",
//         zipcode: "33596"
//     });
//         expect(res.statusCode).toEqual(201); // Account created
//     });
// });

describe('Test failed registration - Missing Data', () => {
    it('Should expect proper response for missing data during registration', async () => {
        const res = await request(app)
        .post('/api/auth/register')
        .send({        
            name: "test",
            password: "test"
        }); // Intentionally missing required fields
        expect(res.body.message).toEqual('Invalid Form. Please refer to https://github.com/BW-Comake3-FT/back-end for api usage.');
    });
});

describe('Test failed registration - Email already in Use', () => {
    it('Should expect proper response for registering with taken email address', async () => {
        const res = await request(app)
        .post('/api/auth/register')
        .send({         
            email: "test4@test.com", // Needs to be a non unique email each time to pass. If failed, use email known to have already been registered.
                                     // or make sure no one deleted the DB >.<
            name: "test",
            password: "test",
            zipcode: "33596"
        });
        expect(res.body.message).toEqual('This e-mail address is already in use.');
    });
});
