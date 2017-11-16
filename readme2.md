# Candidate Exercise - Submission by Pandit Adhilaga-Dres

## Install dependencies

- Install `node` and `npm`.
- Install JS dependencies from npm: `npm install`

## How to start her up
- You can start the server by running `npm run dev` to have it in development mode and `npm run build` to have it in production environment
- It is located on Localhost:3000 if you are running this locally

## Overall Structure
- `gulpfile.js` includes all the code to gulp and minify all .js and .scss files
- The front end is located inside the `public` folder whereas all the backend code is in the `server` folder

## Some Features
- when the search bar is empty after user has entered a search - it shows all the books again
- submit on click or on pressing enter

## Notes
- I tried to respect the instructions to the best of my abilities as well as trying to stick to the overall design 

```
---- How to start 'er up in dev mode on Localhost ------

1: npm i --save
2: cd to root directory of project
3: run 'npm run dev' - this will compress the code into bundle.js in the dist folder and keep the console logs
4: server located on localhost:3000

---- How to start 'er up in production mode on Localhost ------

1: run 'npm run build' - this will compress the code into bundle.js in the dist folder but get rid of the console logs
2: server located on localhost:3000

---- How to run the tests (Mocha) ------

1: run 'npm test' - this will start the scripts to run the test
2: first test will see if filtering works with substring of a title
3: second test will see if filtering work with OLID

```