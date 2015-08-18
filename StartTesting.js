window.onload = function() {

    test("Before the getJsonFromSite function executes:", function() {
        assert(posts.length==0, "posts.length is 0");
    });
    DataModule.getJsonFromSite(page, function() {
        test("After loading data using getJsonFromSite:", function() {
            assert(posts.length==21, "posts.length is 21");
            assert(posts[20], "20th element exists");
            assert(posts[1].userId=="1", "userId of the first post is 1");
            assert(posts[18].userId=="2", "userId of the 18th post is 2");
            assert(posts[4].title=="nesciunt quas odio",
              "Title of the 5th post is nesciunt quas odio");
        });
    });

};
