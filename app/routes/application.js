export default Ember.Route.extend({

  model () {
    return Ember.RSVP.hash({
      posts: this.store.findAll("post"),
      users: this.store.findAll("user")
    });
  },

  setupController (controller, models) {
    controller.setProperties(models);
    var posts = models.posts;
    var users = models.users;

    controller.set('posts', posts);
    controller.set('users', users );
  }
});

  /*  model: function() {
     var store = this.store;
     return Ember.RSVP.hash({
     posts: store.findAll('post')
   });
   },


   setupController: function(controller, models) {
   var users = models.users;

   controller.set('users', users);
   }
   });
   */


/* esto funciona
  model() {
    return this.store.findAll('post');
  },

  afterModel(model) {
    // like model(), if a promise is returned here
    // Ember will wait until it resolves before proceeding
  },

  setupController(controller, model) {
      this.store.findAll('user');
  }

});

*/

/*

	model() {
		return this.store.findAll('post');
	}


  afterModel(model) {
    // like model(), if a promise is returned here
    // Ember will wait until it resolves before proceeding
  },

  setupController(controller, model) {
    this.store.findAll('user');
  }*/






