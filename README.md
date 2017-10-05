# React Router + Node Starter
_for [Heroku](https://www.heroku.com/) deployment_

## OVERVIEW
This is a simple starter to get you up and running for React Router projects. This is intended to provide:

* a lightweight Webpack config (for development and production)
* some helpful tooling for development workflow
* a similar setup to what you'll see in the wild
* Heroku-ready deployment setup

## UP & RUNNING
* Install dependencies
`$ npm install` or `$ yarn`

* Fire up a development server:
* `$ npm run dev`

Once the server is running, you can visit `http://localhost:8080/`

## Linting
_This assumes you have eslint and eslint-watch installed. If you don't, run the following:_
```
$ npm i -g eslint eslint-watch
```
or if you need permissions:
```
$ sudo npm i -g eslint eslint-watch
```

To run the linter once:
```
$ npm run lint
```

To run the watch task:
```
$ npm run lint:watch
```

## Testing
To run the tests:
```
$ npm test
```

To run the watch task:
```
$ npm run test:watch
```

## Production Build
To build your production assets and run the server:
```
$ npm start
```

## Deploying to Heroku
This app is set up for deployment to Heroku!

_This assumes you have already have a Heroku account and have the [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli) installed_
```
$ heroku login
$ heroku create -a name-of-your-app
$ git push heroku master
$ heroku open
```

## Contributing
I am thankful for any contributions made by the community. By contributing you agree to abide by the Code of Conduct in the [Contributing Guidelines](.github/CONTRIBUTING.md)

## License
[MIT](LICENSE)

### _NOTE_
_If you're using npm5+, heroku doesn't like having two `.lock` files present. So if you have a `package.json.lock` and a `yarn.lock` file, you'll need to  put one in your `.gitignore`, or remove one._

Heroku will follow the `build` command in your `package.json` and compile assets with `webpack.prod.config.js`. It runs the Express web server in `server.js`.

If you're unfamiliar with Heroku deployment (or just need a refresher), they have a really great walkthrough [here](https://devcenter.heroku.com/articles/getting-started-with-nodejs#introduction).


## Changelog
**v1.0.0**
This app has been updated to use React v15.5 and Webpack 2.3! 🎉

Major Changes:
* Updates React and ReactDOM to v15.5
* Updates Webpack to v2.3
* Enables hot-reloading for local development
* Adds initial test suite with Enzyme, Expect, and Mocha

Minor Changes:
* Updates all other dependencies to latest
* Updates eslint rules
* Updates npm scripts
* Refactors server.js
* Updates README

## React + Node Starter
If you don't need the router, this is another small starter I built: https://github.com/alanbsmith/react-node-example

### Redux Starter
If you're looking for a similar, minimalistic Redux starter, I would recommend Marc Garreau's [here](https://github.com/marcgarreau/redux-starter)
