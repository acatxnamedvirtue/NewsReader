NewsReader.Views.FeedsIndex = Backbone.CompositeView.extend({
  template: JST['feeds/feedsIndex'],
  events: {
    'click .delete' : 'delete'
  },

  initialize: function (options) {
    this.listenTo(this.collection, 'sync', this.render);
  },

  render: function () {
    var content = this.template({feeds: this.collection});
    this.$el.html(content);

    this.collection.each(function(feed){
      var view = new NewsReader.Views.FeedsIndexItem({model: feed});
      this.addSubview(this.$el.find(".feeds"), view);

    }.bind(this));
    return this;
  }
});
