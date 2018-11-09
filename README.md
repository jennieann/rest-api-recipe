# rest-api-recipe

# Get the project started
**Express server**  
Express server should run on 3001
- cd /workspace/rest-api-recipe 
- PORT=3001 node bin/www

**Start the React APP**  
In the package.json for the React App we have set the proxy to port 3001, wich is where the express server is running. Then start the react App with yarn start standing in the puppies directory.

- cd /workspace/rest-api-recipe/puppies
- yarn start

# Set up the DB with some data
Stand in this folder /workspace/rest-api-recipe/node-postgres-promises.
From the command line run:
- sudo -u postgres psql -f receipes.sql

