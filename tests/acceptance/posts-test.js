import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from 'example-mirage/tests/helpers/start-app';

module('Acceptance | posts', {
  beforeEach: function() {
    this.application = startApp();
  },

  afterEach: function() {
    Ember.run(this.application, 'destroy');
  }
});

test('visiting /posts', function(assert) {
  visit('/posts/1');

  andThen(function() {
    assert.equal(currentURL(), '/posts/1');
  });
});

test('I can view 20 posts in main route', function(assert) {
  server.createList('posts', 20);

  visit('/');
  andThen(function() {
    assert.equal( find('a').length, 20 );
  });
});

test('I can view 10 posts in post route', function(assert) {
  server.createList('posts', 10);

  visit('/posts/1');
  andThen(function() {
    assert.equal( find('a').length, 10 );
  });
});

