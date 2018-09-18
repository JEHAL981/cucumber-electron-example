# cucumber-electron-example

This is a basic example of cucumber-electron + Cucumberjs + babel (es5) usage.

Prerequisites
------------

You will need to install the Chrome browser and the npm package manager before you can run these tests locally.

1. Download and install [Chrome](https://www.google.com/chrome/index.html).
1. Download and install [Node v8.1.1](https://nodejs.org/en/).

The test suite also has a bunch of yarn dependencies which will be installed when you follow the installation
steps below.

* Cucumber-electron
* Cucumber
* Babel ES5
* Browser-Monkey
* Vinehill


Installation
------------

To install the test suite locally, including the above npm dependencies:

1. Clone this repository.
1. Run `npm install` from the root directory of this repository.

### Local

To run the tests locally against the test portal environment:

1. Run `npm test`

To look at the tests
--------------------

Either just run the tests using the above directions, or take a look in the [features](acceptance-test/features) directory.
Example: [music_genre.feature](acceptance-test/features/music_genre.feature)

