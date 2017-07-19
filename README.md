## Project Structure
- public : contains static file, should not be modify, except for imgs
- route : contains `express.js` route files, backend
- src : contains `react.js` files, client-side frontend
- views : contains template files, server-side frontend
 
## Running the application
- for development
-- use `npm run watch`
-- then `npm run dev`
-- this will start `webpack` in watch mode for project-wide compilation
-- and call `nodemon` to run `express.js` while watching for any change in the compiled `server.js` file

- for production
-- run `npm run build`
-- then `npm start`

## Getting start
- run `npm install`