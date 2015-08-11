var root = 'http://jsonplaceholder.typicode.com';
  $.ajax({
    url: root + '/posts/1',
    method: 'GET'
  }).then(function(data) {
    var str = JSON.stringify(data, null, '\t');
    //obj = JSON.parse(str);
    var obj = data;
    $.each(obj, function(i, elem) {
      $('#userId').text(obj.userId);
      $('#id').text(obj.id);
      $('#title').text(obj.title);
      $('#post').text(obj.body);
    });
  });
