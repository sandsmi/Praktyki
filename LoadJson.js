$.getJSON('http://jsonplaceholder.typicode.com/posts',
  function(data) {
      $.each(data, function(i) {
        $('#container').append
        ('<div class="post"><div class="userId">'
        +data[i].userId+'</div><div class="id">'
        +data[i].id+'</div><div class="title">'
        +data[i].title+'</div><div class="text">'
        +data[i].body+'</div> </div>');
      });
  });
