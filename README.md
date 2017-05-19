# Example-mirage

This example of ember-mirage goes it's based on the example of [ProgramWithErik - Ember CLI Mirage Tutorial](http://www.programwitherik.com/ember-mirage-tutorial-and-examples/) but modified to work correctly by fixing bower dependencies and adding acceptance tests.  It also attempts to add a second model named User and show it as part of the UX for acceptance testing (this is work in progress and accepting fix suggestions - see below)

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM)
* [Bower](http://bower.io/)
* [Ember CLI](http://www.ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

* `git clone <repository-url>` this repository
* change into the new directory
* `npm install`   (this will return errors)
* `bower install`
*  select option 3

## Running / Development

* `ember server`
* Visit your app at [http://localhost:4200](http://localhost:4200).
* Visit specific posts at [http://localhost:4200/posts/1](http://localhost:4200/posts/1).


## Current Issues

I updated the project to use two models (and additional "user" model to show names); however, the Mirage API mocks are sending the right data but there's an issue with the UX not showing data from the second model but just empty links.  I'm trying to solve that and any help will be strongly welcomed. 

* Error:  Visit specific posts at [http://localhost:4200/users/1](http://localhost:4200/users/1). (empty user)


### Code Generators

Make use of the many generators for code, try `ember help generate` for more details
* Note:  to install Acceptance tests please use:   #ember g acceptance-test posts
* Content of files can be find in Erick posts

Check out the acceptance tests to see how mocked data can be validated using asserts against UI components.

### Running Tests

* `ember test`
* `ember test --server`
*  Note:  check out the acceptance tests for validating Mirage create list mechanism

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](http://www.ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
  
- Andres de Vivanco

