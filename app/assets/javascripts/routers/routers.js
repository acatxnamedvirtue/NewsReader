NewsReader.Routers.Router = Backbone.Router.extend({
  routes:{
    "": "index",
    "feeds/new": "new",
    "feeds/:id": "show"
  },

  initialize: function(options) {
    this.collection = options.collection;
    this.$rootEl = options.$rootEl;
  },

  index: function() {
    var view = new NewsReader.Views.FeedsIndex({ collection: this.collection});
    this._swapView(view);
  },

  show: function(id) {
    var feed = this.collection.getOrFetch(id);
    var view = new NewsReader.Views.FeedShow({model: feed, collection: this.collection});

    this._swapView(view);
  },

  new: function() {
    var model = new NewsReader.Models.Feed();
    var view = new NewsReader.Views.FeedNew({model: model, collection: this.collection});

    this._swapView(view);
  },

  _swapView: function(view) {
    this._currentView && this._currentView.remove();
    this._currentView = view;
    this.$rootEl.html(view.render().$el);
  }
})
