## Authentication

### POST: `/api/auth/register`
### POST: `/api/auth/login`

User registration:

{
    "name": "Johnny",
    "email": "johnny@gmail.com",
    "password": "blah321",
    "zipcode": "10001"
}

User login:

{
    "email": "johnny1@gmail.com",
    "password": "blah321"
}

## Projects (requires auth)

### GET: `/api/projects`
### POST: `/api/projects`
### GET: `/api/projects/:id`
### PUT: `/api/projects/:id`
### DELETE: `/api/projects/:id`

Project:

{
    "title": "Improve public infrastructure",
    "description": "Raise funding.",
    "location": "Chicago",
    "category": "Government",
    "solution": "ETC"
}

