$.getJSON('http://jsonplaceholder.typicode.com/posts',
  function(data) {
      $.each(data, function(i) {
        $('<div id="userId">'+data[i].userId+'</div>').appendTo('#container');
        $('<div id="id">'+data[i].id+'</div>').appendTo('#container');
        $('<div id="title">'+data[i].title+'</div>').appendTo('#container');
        $('<div id="post">'+data[i].body+'</div>').appendTo('#container');
      });
  });
