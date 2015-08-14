var page = 1;
var posts = [];

// loads placeholder data from site

var DataService = function() {
    console.log("Created LoadData!");

    var handleData = function(page, data) {
        var maxPostLimit = page * 20;
        var minPostLimit = maxPostLimit - 19;
        if(page == 1) {
            minPostLimit = 0;
        }
        for (i = minPostLimit; i <= maxPostLimit; i++) {
            posts.push(data[i]);
        }
        console.log("It works!");
    };

    this.getJsonFromSite = function(page, callback) {
        console.log("Loaded data from site")
        $.ajax({
            method: "GET",
            dataType: 'json',
            url: 'http://jsonplaceholder.typicode.com/posts/',
            success: function(data) {
              handleData(page, data);
              if(callback)
                callback(data);
            }
        })
    };

};

var DisplayService = function() {
    console.log("Created DisplayService!");

    this.appendData = function() {
        var minPostLimit = (page * 20) - 19;
        if(page == 1) {
            minPostLimit = 0;
        }
        for (i = minPostLimit; i < posts.length; i++) {
            $('<div class="post"><div class="icon"></div><div class="userId">'
            +posts[i].userId+'</div><div class="id">'
            + "#" +posts[i].id+'</div><div class="title">'
            +posts[i].title+'</div><div class="text">'
            +posts[i].body+'</div> </div>').hide()
            .appendTo('#container').fadeIn("slow");
        }
        console.log("Append");
    };
};

var p = new DataService();
var d = new DisplayService();

// Loads data the first time
p.getJsonFromSite(page, d.appendData);

// Detects scrollbar position and loads data at the bottom of the page
$(window).scroll(function() {
      if ($(window).scrollTop() == $(document).height() - $(window).height()) {
          page++;
          p.getJsonFromSite(page, d.appendData);
      }
});
