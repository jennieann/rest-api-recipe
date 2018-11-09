# rest-api-recipe

# Get the project started
**Express server**
Express server should run on 3001
- cd /workspace/rest-api-recipe 
- PORT=3001 node bin/www

**Start the React APP**
In the package.json for the React App we have set the proxy to port 3001, wich is where the express server is running

- cd /workspace/rest-api-recipe/puppies
- yarn start
