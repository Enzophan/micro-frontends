Static files are served out of the public directory.

```
$ curl http://localhost:4000/placeholder.txt
$ # result -> Put your static files in this directory and then delete this file.
```

You can have un-authorized routes.

```
$ curl http://localhost:4000/unauthorized
$ # result -> true
```

$ curl http://localhost:4000/products


Trying authorized routes without a JWT will result in a 401.

```
$ curl http://localhost:4000/authorized
$ # result -> {"statusCode":401,"message":"Unauthorized"}                                 
```

Use the `/auth/login` route to login.

```
$ # POST /auth/login
$ curl -X POST http://localhost:4000/auth/login -d '{"username": "maria", "password": "123"}' -H "Content-Type: application/json"
$ # result -> {"access_token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2Vybm... }
```

Send the JWT to authorized routes using the `Authorization` header and prefixing the JWT with `Bearer `.

```
$ # GET /profile using access_token returned from previous step as bearer code
$ curl http://localhost:4000/authorized -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2Vybm..."
$ # result -> {"userId":2}
```

```
curl http://localhost:4000/cart -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Im1hcmlhIiwic3ViIjoyLCJpYXQiOjE3MDIzOTYxNjIsImV4cCI6MTcwMjQ4MjU2Mn0.Q0yEWlX60YOAwR3jW7bbUeTM2vfiS8WXvKnj81aa--Y"
```
