DataModule.getJsonFromSite(page, DisplayModule.appendData);

// Detects scrollbar position and loads data at the bottom of the page
$(window).scroll(function() {
      if ($(window).scrollTop() == $(document).height() - $(window).height()) {
          page++;
          DataModule.getJsonFromSite(page, DisplayModule.appendData);
      }
});
