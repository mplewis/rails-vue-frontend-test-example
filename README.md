# Frontend Testing in Rails

This example uses Rails 5.1 and [Webpacker](https://github.com/rails/webpacker) to create a working [Vue](https://github.com/vuejs/vue) frontend app.

It is configured for frontend testing with the following:

* Test runner: [Karma](https://github.com/karma-runner/karma)
* Test framework: [Mocha](https://github.com/mochajs/mocha)
* Assertions: [Chai](https://github.com/chaijs/chai)
* Mocking: [Sinon](https://github.com/sinonjs/sinon)
* Vue component testing: [avoriaz](https://github.com/eddyerburgh/avoriaz)
* Browser: [jsdom](https://github.com/tmpvar/jsdom)
* Compiler: [Webpack](https://github.com/webpack/webpack)

# Usage

```sh
# Install dependencies
bundle install
yarn install

# To see Vue in action, run the server, then open http://localhost:3000 in your browser
rails s

# Run frontend tests in test/javascript
yarn test
```

# How does it work?

Check out the commits, one by one, to see the step-by-step process of setting up a new Rails project, mounting a Vue component, and adding Karma with its config and dependencies.

# License

MIT
