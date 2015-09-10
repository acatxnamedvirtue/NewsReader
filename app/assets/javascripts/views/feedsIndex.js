NewsReader.Views.FeedsIndex = Backbone.CompositeView.extend({
  template: JST['feeds/feedsIndex'],
  events: {},

  initialize: function (options) {
    this.listenTo(this.collection, 'sync', this.render);
    this.listenTo(this.collection, 'remove', this.delete)
  },

  render: function () {
    var content = this.template({feeds: this.collection});
    this.$el.html(content);

    this.collection.each(function(feed){
      var view = new NewsReader.Views.FeedsIndexItem({model: feed});
      this.addSubview(this.$el.find(".feeds"), view);

    }.bind(this));
    return this;
  },

  delete: function(model) {
    this.removeModelSubview(this.$el.find(".feeds"), model);
  }
});
