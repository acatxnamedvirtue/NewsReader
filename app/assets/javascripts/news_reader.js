window.NewsReader = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    var feeds = new NewsReader.Collections.Feeds();
    feeds.fetch({ reset: true });

    var users = new NewsReader.Collections.Users();
    users.fetch({ reset: true });

    this.router = new NewsReader.Routers.Router({
      users: users,
      feeds: feeds,
      $rootEl: $("#content")
    });
    Backbone.history.start();
  }
};

$(document).ready(function(){
  NewsReader.initialize();
});
