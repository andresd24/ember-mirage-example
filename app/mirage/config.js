
export default function() {
//	this.get('posts');
//	this.get('posts/:id');
//collection of data
  this.get('/posts', function(db) {
    return {
      data: db.posts.map(attrs => (
        {type: 'posts', id: attrs.id, attributes: attrs }
      ))
  };
  });

  this.get('/users', function(db) {
    return {
      data: db.users.map(attrs => (
        {type: 'users', id: attrs.id, attributes: attrs }
      ))
  };
  });




//single data
  this.get('/posts/:id', function(db, request) {
    let id = request.params.id;

    return {
      data: {
        type: 'posts',
        id: id,
        attributes: db.posts.find(id)
      }
    };
  });


//single data
  this.get('/users/:id', function(db, request) {
    let id = request.params.id;

    return {
      data: {
        type: 'users',
        id: id,
        attributes: db.users.find(id)
      }
    };
  });


}
