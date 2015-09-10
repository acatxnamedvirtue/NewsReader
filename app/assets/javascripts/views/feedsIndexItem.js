NewsReader.Views.FeedsIndexItem = Backbone.CompositeView.extend({
  template: JST['feeds/feedsIndexItem'],
  tagName: 'li',
  events: {
    "click .delete": "delete"
  },

  render: function() {
    var content =this.template({feed: this.model});
    this.$el.html(content);

    return this;
  },

  delete: function(e){
    e.preventDefault();
    this.model.destroy();
    this.remove();
  }
});
