NewsReader.Routers.Router = Backbone.Router.extend({
  routes:{
    "": "index",
    "session/new": "newSession",
    "users/new": "newUser",
    "feeds/new": "newFeed",
    "feeds/:id": "showFeed"
  },

  initialize: function(options) {
    this.feeds = options.feeds;
    this.users = options.users;
    this.$rootEl = options.$rootEl;
  },

  index: function() {
    var view = new NewsReader.Views.FeedsIndex({ collection: this.feeds});
    this._swapView(view);
  },

  showFeed: function(id) {
    var feed = this.feeds.getOrFetch(id);
    var view = new NewsReader.Views.FeedShow({model: feed, collection: this.feeds});

    this._swapView(view);
  },

  newFeed: function() {
    var feed = new NewsReader.Models.Feed();
    var view = new NewsReader.Views.FeedNew({model: feed, collection: this.feeds});

    this._swapView(view);
  },

  newUser: function() {
    var user = new NewsReader.Models.User();
    var view = new NewsReader.Views.UserNew({model: user, collection: this.users});

    this._swapView(view);
  },

  newSession: function() {

  },

  _swapView: function(view) {
    this._currentView && this._currentView.remove();
    this._currentView = view;
    this.$rootEl.html(view.render().$el);
  }
})
