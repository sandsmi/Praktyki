/*
$.ajax(
    type:'GET',
    url:"http://jsonplaceholder.typicode.com/posts",
    data:"format=json",
    success:function(feed) {
        document.write(feed);
    },
    dataType:'json'
);
*/

var root = 'http://jsonplaceholder.typicode.com';

$.ajax({
  url: root + '/posts/1',
  method: 'GET'
}).then(function(data) {
  console.log(data);
});

function showAlert() { alert('You triggered an alert!');
