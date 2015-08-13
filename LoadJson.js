var page = 1;

// loads placeholder data from site
var LoadData = function(page) {
    var maxPostLimit = page * 20;
    var minPostLimit = maxPostLimit - 19;
    $.ajax({
        method: "GET",
        dataType: 'json',
        url: 'http://jsonplaceholder.typicode.com/posts/',
        success: (function (data) {
            for (i = minPostLimit; i <= maxPostLimit; i++) {
                $('#container').append
                ('<div class="post"><div class="userId">'
                +data[i].userId+'</div><div class="id">'
                +data[i].id+'</div><div class="title">'
                +data[i].title+'</div><div class="text">'
                +data[i].body+'</div> </div>');
            }
        })
    });
};

// Loads data the first time
LoadData(page);

// Detects scrollbar position and loads data at the bottom of the page
$(window).scroll(function() {
      if ($(window).scrollTop() == $(document).height() - $(window).height()) {
          page++;
          LoadData(page);
      }
});

// PREVIOUS VERSION

  /*
  var postLimit = 15;

  // Loads placeholder JSON data from site
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
        // Hides posts after the set limit
        $('#container > .post:gt('+(postLimit)+')').hide();
    });

  // Detects scrollbar position
  $(window).scroll(function() {
        if ($(window).scrollTop() == $(document).height() - $(window).height()) {
          loadMore();
        }
      });

  // Loads five more posts if the scrollbar reaches the bottom of the page
  function loadMore() {
      postLimit += 5;
      $('#container > .post:lt('+(postLimit)+')').show();
      if ($('#container > .post').length <= postLimit) {
          $(this).hide();
      }
    };
*/

// DIFFERENT APPROACH (UNFINISHED!!)

/*
var page = 1;

var LoadData = function(page) {
  var maxPostLimit = page * 20;
  var minPostLimit = maxPostLimit - 1;
  $.ajax({
      method: "GET",
      dataType: 'json',
      url: 'http://jsonplaceholder.typicode.com/posts/',
      success: (function (data) {
          for (i = minPostLimit; i <= maxPostLimit; i++) {

          }
      })
  });
}

var DisplayData = function() {
    $('#container').append
    ('<div class="post"><div class="userId">'
    +data[i].userId+'</div><div class="id">'
    +data[i].id+'</div><div class="title">'
    +data[i].title+'</div><div class="text">'
    +data[i].body+'</div> </div>');
}
*/
