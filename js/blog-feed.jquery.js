<script type="text/javascript">
  function mycallback(json) {
    for (var i = 0; i < json.feed.entry.length; i++) {
      for (var j = 0; j < json.feed.entry[i].link.length; j++) {
        if (json.feed.entry[i].link[j].rel == 'alternate') {
          var postUrl = json.feed.entry[i].link[j].href;
          break;
        }
      }
      var postTitle = json.feed.entry[i].title.$t;
      var postAuthor = json.feed.entry[i].author[0].name.$t;
      var postSummary = json.feed.entry[i].summary.$t;
      var entryShort = postSummary.substring(0,400);
      var entryEnd = entryShort.lastIndexOf(" ");
      var postContent = entryShort.substring(0, entryEnd) + '...';
      var postImage = json.feed.entry[i].media$thumbnail.url.replace('s72-c/','s1600/');
      var item = '<div class="wrapper"><img src="' + postImage + '"/><h3><a href=' + postUrl + '>' + postTitle + '</h3></a><span>'+ postAuthor + '</span><p>' + postContent + '</p></div>';
      document.write(item);
    }
  }
</script>
<script src="https://www.universalmanual.com/feeds/posts/summary?orderby=published&max-results=5&alt=json-in-script&callback=mycallback"></script>