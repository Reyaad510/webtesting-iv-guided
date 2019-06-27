# server testing

## components of an api

function name(args) => return something;

- routes/endpoints: url(data) => return response;
- business logic (validation/data conversion/operations).
- data access: talk to the persistent data store.

set the test environment to run on 'node' instead of a browser


1. Go to package.json and type this: 

 "jest": {
    "testEnvironment": "node"
  },

  Set environment when migrate for test.database
  Do knex migrate:latest --env=testing


3. const server = require('./server.js');

describe('server.js', () => {
    it('should set the test env', () => {
        expect(process.env.DB_ENV).toBe('testing');
    });
});

Error Port in use means want server.listen to be in separate file

4. yarn add supertest --dev

5. GO to server.spec.js