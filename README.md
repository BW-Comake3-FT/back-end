## [Deployed API](https://co-make-app.herokuapp.com/)

## Authentication

### POST: `/api/auth/register`

```
{
    "name": "Johnny",
    "email": "johnny@gmail.com",
    "password": "blah321",
    "zipcode": "10001"
}
```

### POST: `/api/auth/login`

```
{
    "email": "johnny@gmail.com",
    "password": "blah321"
}
```

## Projects (requires auth)

### GET: `/api/projects`
### POST: `/api/projects`
### GET: `/api/projects/:id`
### PUT: `/api/projects/:id`
### DELETE: `/api/projects/:id`

```
{
    "title": "Improve public infrastructure",
    "description": "Raise funding",
    "category": "Government",
    "solution": "TBD"
}
```

