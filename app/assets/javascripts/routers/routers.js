NewsReader.Routers.Router = Backbone.Router.extend({
  routes:{
    "": "index"
  },

  initialize: function(options) {
    this.collection = options.collection;
    this.$rootEl = options.$rootEl;
  },

  index: function() {
    view = new NewsReader.Views.FeedsIndex({ collection: this.collection});
    this._swapView(view);
  },

  _swapView: function(view) {
    this._currentView && this._currentView.remove();
    this._currentView = view;
    this.$rootEl.html(view.render().$el);
  }
})
