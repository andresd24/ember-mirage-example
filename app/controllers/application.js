import Ember from 'ember';

export default Ember.Controller.extend({
  init () {
    let posts = this.get("posts");
    let users = this.get("users");

    // results is returning undefined
    // users is also undefined
  }
});
