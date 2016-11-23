### Requirements
These dependencies are needed to build the app.

- Node (v6.7.x) & Npm ([nvm](https://github.com/creationix/nvm) usage is advised)
- MongoDB (v3)

> The versions mentioned are the ones used during development. It could work with newer ones.
  Run `nvm use` to activate the correct version.

### Setup
Install dependencies:
```
$ npm install
```

Add the `mongo` uri to `config/local.js`:
```
  mongo: {
    uri: '',
    testUri: '' // used when running npm test
  }
```
Or use the corresponding environment variables `MONGO_URI` and `MONGO_TESTURI`.

### Running the App
```
npm run nodemon
```
This will start the app at `http://localhost:4000`.
This command starts the server with `nodemon` which watches files and restarts when there's a change.

```
npm start
```
Starts the app without file watching

## Users
Users are authenticated through token generated by [auth0](https://auth0.com/).

You'll need to set the `auth0` credentials using the config files:
```
  auth0: {
    secret: '',
    clientId: '',
    api: '',
    manageToken: ''
  }
```
Or the corresponding environment variables `AUTH0_SECRET`, `AUTH0_CLIENT_ID`, `AUTH0_URL`, `AUTH0_MANAGE_TOKEN`

#### Manage token
The auth0 manage token is used to query the auth0 api to get information about the users. The easiest way to get one it to use token generator on their [documentation page](https://auth0.com/docs/api/management/v2). Scopes needed:
```
read:users
```

There are 2 tokens below that can be used for testing purposes. Note that these tokens are only valid using the appropriate auth0 secret.

To see the content of the JWT use https://jwt.io/

### Coordinator
Has the `coordinator` role. Note that coordinators, can work as surveyors as well.
- u: `coordinator`
- p: `coordinator`

```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiYXV0aDB8NTgyZDhkYzE3ODgyYjI5NzAyNTNiYjE1Iiwicm9sZXMiOlsiY29vcmRpbmF0b3IiXSwiaWF0IjoxNDc5NzI0OTE5LCJleHAiOjE3OTUzMDA5MTksImF1ZCI6InFUUVc1TDM2MnAwRFdwdU5BY3g1U0hnZ09ZMXA2NWJHIiwiaXNzIjoiaHR0cHM6Ly9kYW5pZWxmZHNpbHZhLmV1LmF1dGgwLmNvbS8iLCJzdWIiOiJhdXRoMHw1ODJkOGRjMTc4ODJiMjk3MDI1M2JiMTUifQ.rY_ykvkYh1WcMBFTmna8RxVdg5Xk40jVtcjuevvcEU8
```

### Surveyor
Has the `surveyor` role.
- u: `surveyor`
- p: `surveyor`

```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiYXV0aDB8NTgzMmQwMDhkMjM2ZTkwZTI3Mzk0MzdmIiwicm9sZXMiOlsic3VydmV5b3IiXSwiaWF0IjoxNDc5NzI1MzAwLCJleHAiOjE3OTUzMDEzMDAsImF1ZCI6InFUUVc1TDM2MnAwRFdwdU5BY3g1U0hnZ09ZMXA2NWJHIiwiaXNzIjoiaHR0cHM6Ly9kYW5pZWxmZHNpbHZhLmV1LmF1dGgwLmNvbS8iLCJzdWIiOiJhdXRoMHw1ODMyZDAwOGQyMzZlOTBlMjczOTQzN2YifQ.29tNiF2L6HaklYConcZU4sDflb095tI14hD0i-OK9KY
```

## Fixtures
To setup the database with dummy data run:

```
npm run setupdb
```

Note: This will remove the database and import the dummy data again.